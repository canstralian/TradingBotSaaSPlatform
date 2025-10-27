/**
 * Asynchronous data fetching service for the Trading Bot SaaS platform.
 * 
 * This module provides utilities for fetching market data and account information
 * using fetch API, adhering to TypeScript standards for async operations and error handling.
 */

interface MarketData {
  [tokenId: string]: {
    usd: number
  }
}

interface AccountBalance {
  [currency: string]: {
    available: number
    locked: number
  }
}

interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

// Public API endpoint (CoinGecko)
const PUBLIC_API_BASE = 'https://api.coingecko.com/api/v3'

// Hypothetical private API endpoint
const PRIVATE_API_BASE = 'https://api.my-exchange.com/v1'

/**
 * Fetches current market prices for a list of tokens in USD.
 * 
 * @param tokenIds - Array of token IDs (e.g., ['bitcoin', 'ethereum'])
 * @returns Promise resolving to market data or error response
 */
export async function fetchMarketData(
  tokenIds: string[]
): Promise<ApiResponse<MarketData>> {
  if (!tokenIds || tokenIds.length === 0) {
    console.warn('fetchMarketData called with no token_ids.')
    return { success: false, error: 'No token IDs provided' }
  }

  const idsStr = tokenIds.join(',')
  const url = `${PUBLIC_API_BASE}/simple/price`
  const params = new URLSearchParams({
    ids: idsStr,
    vs_currencies: 'usd',
  })

  console.info(`Fetching market data for: ${idsStr}`)

  try {
    const response = await fetch(`${url}?${params}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: MarketData = await response.json()
    console.debug('Successfully fetched price data:', data)
    
    return { success: true, data }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error(`Error fetching market data from ${url}: ${errorMessage}`)
    return { success: false, error: errorMessage }
  }
}

/**
 * Fetches the user's account balance from a private, authenticated endpoint.
 * 
 * @returns Promise resolving to account balance or error response
 */
export async function getAccountBalance(): Promise<ApiResponse<AccountBalance>> {
  const apiKey = import.meta.env.VITE_TRADING_API_KEY
  const apiSecret = import.meta.env.VITE_TRADING_API_SECRET

  if (!apiKey || !apiSecret) {
    const error = 'VITE_TRADING_API_KEY or VITE_TRADING_API_SECRET environment variables not set.'
    console.error(error)
    return { success: false, error }
  }

  const headers = {
    'X-API-KEY': apiKey,
    'X-API-SIGNATURE': apiSecret, // In a real app, you'd sign the request properly
    'Content-Type': 'application/json',
  }

  const url = `${PRIVATE_API_BASE}/account/balance`
  console.info('Fetching private account balance...')

  try {
    const response = await fetch(url, { headers })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: AccountBalance = await response.json()
    console.info('Successfully fetched account balance.')
    
    return { success: true, data }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error(`Error fetching account balance: ${errorMessage}`)
    return { success: false, error: errorMessage }
  }
}

/**
 * Simulates fetching demo market data for the homepage
 * @returns Promise resolving to demo market data
 */
export async function fetchDemoMarketData(): Promise<MarketData> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    bitcoin: { usd: 45250.30 },
    ethereum: { usd: 2850.75 },
    solana: { usd: 98.42 },
  }
}
