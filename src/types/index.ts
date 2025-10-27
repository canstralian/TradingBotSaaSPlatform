export interface MarketData {
  [tokenId: string]: {
    usd: number
    usd_24h_change?: number
    usd_market_cap?: number
    usd_24h_vol?: number
  }
}

export interface AccountBalance {
  [currency: string]: {
    available: number
    locked: number
    total: number
  }
}

export interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
  timestamp?: number
}

export interface PricingTier {
  name: string
  price: number
  period: 'month' | 'year'
  features: string[]
  popular?: boolean
  ctaText: string
  ctaLink: string
}

export interface TestimonialData {
  name: string
  company: string
  role: string
  content: string
  avatar?: string
  rating: number
}

export interface FeatureData {
  title: string
  description: string
  icon: string
  benefits: string[]
}
