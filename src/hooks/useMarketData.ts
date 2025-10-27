import { useState, useEffect, useCallback } from 'react'
import { fetchMarketData, fetchDemoMarketData } from '../services/dataFetcher'

interface MarketData {
  [tokenId: string]: {
    usd: number
  }
}

interface UseMarketDataReturn {
  data: MarketData | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useMarketData(tokenIds?: string[]): UseMarketDataReturn {
  const [data, setData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async (): Promise<void> => {
    setLoading(true)
    setError(null)

    try {
      let result
      if (tokenIds && tokenIds.length > 0) {
        result = await fetchMarketData(tokenIds)
        if (!result.success) {
          throw new Error(result.error)
        }
        setData(result.data || null)
      } else {
        // Use demo data for homepage
        const demoData = await fetchDemoMarketData()
        setData(demoData)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch market data'
      setError(errorMessage)
      setData(null)
    } finally {
      setLoading(false)
    }
  }, [tokenIds])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  }
}
