import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useMarketData } from '../useMarketData'

// Mock the dataFetcher module
vi.mock('../services/dataFetcher', () => ({
  fetchMarketData: vi.fn(),
  fetchDemoMarketData: vi.fn()
}))

import { fetchMarketData, fetchDemoMarketData } from '../services/dataFetcher'

describe('useMarketData', () => {
  it('should initialize with loading state', () => {
    const { result } = renderHook(() => useMarketData())
    
    expect(result.current.data).toBe(null)
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBe(null)
  })

  it('should fetch demo data when no token IDs provided', async () => {
    const mockDemoData = { bitcoin: { usd: 45000 } }
    vi.mocked(fetchDemoMarketData).mockResolvedValueOnce(mockDemoData)

    const { result } = renderHook(() => useMarketData())
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual(mockDemoData)
    expect(result.current.error).toBe(null)
  })

  it('should fetch specific token data when token IDs provided', async () => {
    const mockApiResponse = {
      success: true,
      data: { ethereum: { usd: 3000 } }
    }
    vi.mocked(fetchMarketData).mockResolvedValueOnce(mockApiResponse)

    const { result } = renderHook(() => useMarketData(['ethereum']))
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toEqual(mockApiResponse.data)
    expect(result.current.error).toBe(null)
  })

  it('should handle API errors', async () => {
    const mockErrorResponse = {
      success: false,
      error: 'API Error'
    }
    vi.mocked(fetchMarketData).mockResolvedValueOnce(mockErrorResponse)

    const { result } = renderHook(() => useMarketData(['bitcoin']))
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.data).toBe(null)
    expect(result.current.error).toBe('API Error')
  })

  it('should provide refetch functionality', async () => {
    const mockData = { bitcoin: { usd: 45000 } }
    vi.mocked(fetchDemoMarketData).mockResolvedValue(mockData)

    const { result } = renderHook(() => useMarketData())
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(typeof result.current.refetch).toBe('function')
    
    // Test refetch
    await result.current.refetch()
    expect(vi.mocked(fetchDemoMarketData)).toHaveBeenCalledTimes(2)
  })
})
