# Trading Bot SaaS Platform

A modern SaaS website for automated trading solutions built with React, TypeScript, and Tailwind CSS.

## Features

- 🚀 Modern React with TypeScript
- 🎨 Tailwind CSS for styling
- 🔄 Async data fetching with proper error handling
- 📱 Responsive design
- 🧪 Comprehensive testing setup
- 🔧 Linting and formatting
- ⚡ Fast development with Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run typecheck` - Run TypeScript compiler check

### Testing
- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

### Pre-commit
- `npm run pre-commit` - Run all quality checks (lint, format, typecheck, test)

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── services/           # API services and data fetching
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── __tests__/          # Test files
```

## API Integration

The project includes async data fetching capabilities:

- Market data from CoinGecko API
- Account balance from trading APIs
- Proper error handling and loading states
- TypeScript interfaces for API responses

## Testing Strategy

- Unit tests with Vitest and React Testing Library
- Component testing with user interaction simulation
- Service layer testing with API mocking
- Custom hooks testing
- Coverage reporting

## Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Strict compiler options
- Pre-commit hooks

## Contributing

1. Run quality checks: `npm run pre-commit`
2. Ensure all tests pass
3. Follow the established code style
4. Add tests for new features

## License

MIT License
