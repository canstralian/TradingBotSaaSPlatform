# Security-First Full-Stack Style Guide
*Optimized for FastAPI, React, Embedded Systems, and CTF-grade code*

## Core Philosophy
- **Precision over convenience**: Code must be explicit, unambiguous, and defensible
- **Security by default**: Every input is hostile until proven otherwise
- **Clarity is king**: If it needs a comment to explain logic, refactor it first
- **Performance matters**: Embedded targets and ML pipelines don't forgive bloat

---

## Python Standards (FastAPI Primary)

### PEP 8 Compliance - STRICT
- **Line length**: 88 characters (Black formatter standard)
- **Indentation**: 4 spaces, no tabs, no exceptions
- **Imports**: Absolute only, grouped and sorted:
```python
  # Standard library
  import os
  from typing import Optional

  # Third-party
  import torch
  from fastapi import FastAPI, HTTPException
  
  # Local
  from app.core.security import verify_token
```

### Type Hints - MANDATORY
```python
# Always use type hints - this isn't optional
def authenticate_user(
    username: str,
    password: str,
    db: PostgreSQL
) -> Optional[UserModel]:
    """Every function gets types and a docstring."""
    pass
```

### Security Patterns
**Critical**: Flag these immediately:
- ❌ Raw SQL without parameterization
- ❌ Secrets in code (API keys, passwords, tokens)
- ❌ User input without validation (Pydantic models required for FastAPI)
- ❌ Missing rate limiting on endpoints
- ❌ `eval()`, `exec()`, or `pickle.loads()` without justification
- ❌ Weak crypto (MD5, SHA1 for passwords)
- ❌ Missing CORS configuration or wildcard `*` origins in production
- ❌ Exception handlers that leak stack traces to clients

**Required Security Patterns**:
```python
# ✅ Parameterized queries only
result = await db.fetch_one(
    "SELECT * FROM users WHERE username = $1",
    username
)

# ✅ Secrets from environment
API_KEY = os.getenv("API_KEY")
if not API_KEY:
    raise ValueError("API_KEY not configured")

# ✅ Pydantic validation for all inputs
class UserCreate(BaseModel):
    username: constr(min_length=3, max_length=32, regex=r'^[a-zA-Z0-9_]+$')
    password: SecretStr
```

### Error Handling
```python
# ✅ Specific exceptions, no bare excepts
try:
    result = risky_operation()
except ValueError as e:
    logger.error(f"Invalid value: {e}")
    raise HTTPException(status_code=400, detail="Invalid input")
except DatabaseError as e:
    logger.critical(f"DB failure: {e}")
    raise HTTPException(status_code=500, detail="Internal error")
# Never: except Exception
```

### Logging
- Use structured logging (JSON format for production)
- Log levels: DEBUG for development, INFO for operations, WARNING for anomalies, ERROR for failures, CRITICAL for security events
- **Never log sensitive data**: passwords, tokens, PII, credit cards
- Context is crucial: include request IDs, user IDs (hashed), timestamps

### OOP Conventions
- Classes use `CapWords`: `UserManager`, `AuthService`
- Private methods: `_internal_helper()`
- Protected attributes: `_connection_pool`
- Magic methods only when implementing protocols
- Favor composition over inheritance

---

## FastAPI Specifics

### Dependency Injection
```python
# ✅ Use FastAPI's DI system
async def get_db() -> AsyncGenerator[Database, None]:
    async with database_pool.connection() as conn:
        yield conn

@app.post("/users/")
async def create_user(
    user: UserCreate,
    db: Database = Depends(get_db),
    current_user: User = Depends(get_current_user)  # Security dependency
):
    pass
```

### Response Models
- Always define response models with `response_model`
- Use `response_model_exclude_none=True` to avoid null pollution
- Never return raw ORM objects

---

## Frontend (React)

### Component Structure
- Functional components only (hooks era)
- TypeScript preferred over JavaScript
- Props interface always defined
- One component per file
- CSS modules or styled-components (no inline styles)

### Security
- Sanitize user input before rendering (DOMPurify)
- CSP headers enforced
- No `dangerouslySetInnerHTML` without explicit review
- API keys never in frontend code

---

## Embedded Systems (Raspberry Pi, ESP32)

### Resource Constraints
- Memory leaks are fatal - flag any unbounded growth
- Power consumption matters - flag busy-wait loops
- Use interrupts over polling where possible
- Document pin assignments and hardware interfaces

### C/C++ for Embedded
```cpp
// ✅ Fixed-size buffers
char buffer[256];
// ❌ Never: char* buffer = malloc(size);  without bounds checking

// ✅ Volatile for hardware registers
volatile uint32_t* const GPIO_BASE = (uint32_t*)0x40020000;
```

---

## Database (PostgreSQL)

### Query Patterns
- Use indexes - flag full table scans in frequently-called code
- Transactions for multi-step operations
- Connection pooling always (asyncpg for Python)
- **Never** `SELECT *` in production code - explicit columns only

### Migrations
- All schema changes via migration files (Alembic)
- No manual SQL in production
- Rollback plan documented for each migration

---

## ML/Data Science (PyTorch, TensorFlow)

### Model Code
```python
# ✅ Device-agnostic code
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = model.to(device)

# ✅ Reproducible experiments
torch.manual_seed(42)
np.random.seed(42)

# ✅ Explicit tensor shapes in comments
x = torch.randn(batch_size, channels, height, width)  # (N, C, H, W)
```

### Data Pipelines
- Validate data shapes and types at pipeline entry
- Handle missing data explicitly (no silent NaN propagation)
- Memory-map large datasets (don't load everything into RAM)

---

## Git Commit Messages
**Format** (strict):
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**: `feat`, `fix`, `sec` (security), `perf`, `refactor`, `test`, `docs`

**Example**:
```
sec(auth): add rate limiting to login endpoint

Implements token bucket algorithm to prevent brute force attacks.
Limits: 5 attempts per minute per IP.

Refs: #123
```

---

## Review Focus Areas

### High Priority (block PR if found):
1. SQL injection vulnerabilities
2. Authentication/authorization bypasses
3. Secrets in code
4. Resource leaks (memory, file handles, connections)
5. Race conditions in concurrent code
6. Unvalidated user input

### Medium Priority (strong suggestion):
1. Missing type hints
2. Poor error handling
3. Performance bottlenecks (N+1 queries, excessive loops)
4. Missing tests for security-critical code
5. Inconsistent naming conventions

### Low Priority (nice to have):
1. Code duplication
2. Over-complex logic that could be simplified
3. Missing docstrings on public functions
4. Outdated comments

---

## Neurodivergent-Friendly Code Patterns
- **No ambiguity**: Explicit is always better than implicit
- **Consistent structure**: Same patterns for same problems
- **Chunked logic**: Functions should do one thing well
- **Visual breaks**: Whitespace and grouping aid readability
- **Context retention**: Comments explain *why*, not *what*

---

## CTF/Security Context
When reviewing code that appears to be:
- Exploit development
- Security tooling
- Reverse engineering utilities

Apply security-conscious review *from defensive perspective*:
- Is this safe to run on production systems?
- Could this accidentally cause damage?
- Are there safeguards against misuse?

---

## Grammar and Documentation
- Complete sentences with proper punctuation
- No typos in user-facing text
- API documentation follows OpenAPI 3.0 spec
- README files must include: setup, usage, security considerations
- Variable names are pronounceable and searchable

---

## Tools Expected in Use
- **Formatter**: Black (Python), Prettier (JS/React)
- **Linter**: Ruff (Python, replaces Flake8+), ESLint (JS)
- **Type checker**: mypy (Python), TypeScript compiler
- **Security scanner**: Bandit (Python), npm audit (Node)

If code doesn't pass these tools, flag it in review.
