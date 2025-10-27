import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchMarketData, getAccountBalance, fetchDemoMarketData } from '../dataFetcher'

// Mock fetch globally
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('dataFetcher', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('fetchMarketData', () => {
    it('should return error when no token IDs provided', async () => {
      const result = await fetchMarketData([])
      
      expect(result.success).toBe(false)
      expect(result.error).toBe('No token IDs provided')
    })

    it('should fetch market data successfully', async () => {
      const mockData = {
        bitcoin: { usd: 45000 },
        ethereum: { usd: 3000 }
      }

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockData
      })

      const result = await fetchMarketData(['bitcoin', 'ethereum'])
      
      expect(result.success).toBe(true)
      expect(result.data).toEqual(mockData)
      expect(mockFetch).toHaveBeenCalledWith(
        expect.stringContaining('api.coingecko.com')
      )
    })

    it('should handle API errors gracefully', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404
      })

      const result = await fetchMarketData(['bitcoin'])
      
      expect(result.success).toBe(false)
      expect(result.error).toContain('HTTP error')
    })

    it('should handle network errors', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'))

      const result = await fetchMarketData(['bitcoin'])
      
      expect(result.success).toBe(false)
      expect(result.error).toBe('Network error')
    })
  })

  describe('getAccountBalance', () => {
    it('should return error when environment variables are missing', async () => {
      // Clear environment variables
      vi.stubGlobal('import', {
        meta: {
          env: {}
        }
      })

      const result = await getAccountBalance()
      
      expect(result.success).toBe(false)
      expect(result.error).toContain('environment variables not set')
    })
  })

  describe('fetchDemoMarketData', () => {
    it('should return demo market data', async () => {
      const result = await fetchDemoMarketData()
      
      expect(result).toHaveProperty('bitcoin')
      expect(result).toHaveProperty('ethereum')
      expect(result).toHaveProperty('solana')
      expect(result.bitcoin.usd).toBeTypeOf('number')
    })
  })
})
