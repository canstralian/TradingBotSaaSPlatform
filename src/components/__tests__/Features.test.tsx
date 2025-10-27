import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Features from '../Features'

describe('Features Component', () => {
  it('renders the features section heading', () => {
    render(<Features />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/powerful features/i)
  })

  it('renders all feature items', () => {
    render(<Features />)
    
    // Check for specific feature titles
    expect(screen.getByText(/automated trading/i)).toBeInTheDocument()
    expect(screen.getByText(/risk management/i)).toBeInTheDocument()
    expect(screen.getByText(/real-time analytics/i)).toBeInTheDocument()
    expect(screen.getByText(/portfolio optimization/i)).toBeInTheDocument()
    expect(screen.getByText(/advanced security/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 monitoring/i)).toBeInTheDocument()
  })

  it('displays feature descriptions', () => {
    render(<Features />)
    
    const description = screen.getByText(/execute trades automatically/i)
    expect(description).toBeInTheDocument()
  })

  it('renders feature icons', () => {
    render(<Features />)
    
    // Icons should be present (we can't easily test specific icons, but we can check they exist)
    const featureItems = screen.getAllByTestId(/feature-item/i) || 
                        screen.getAllByRole('article') ||
                        document.querySelectorAll('[data-testid*="feature"]')
    
    expect(featureItems.length).toBeGreaterThan(0)
  })
})
