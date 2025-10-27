import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Hero from '../Hero'

const renderWithRouter = (component: React.ReactElement): void => {
  render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Hero Component', () => {
  it('renders the main heading', () => {
    renderWithRouter(<Hero />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Automate Your Trading/i)
  })

  it('renders the primary CTA button', () => {
    renderWithRouter(<Hero />)
    
    const ctaButton = screen.getByRole('link', { name: /start free trial/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/signup')
  })

  it('renders the secondary CTA button', () => {
    renderWithRouter(<Hero />)
    
    const secondaryButton = screen.getByRole('link', { name: /watch demo/i })
    expect(secondaryButton).toBeInTheDocument()
    expect(secondaryButton).toHaveAttribute('href', '/demo')
  })

  it('displays the subheading text', () => {
    renderWithRouter(<Hero />)
    
    const subheading = screen.getByText(/maximize your trading potential/i)
    expect(subheading).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    renderWithRouter(<Hero />)
    
    const section = screen.getByRole('banner') || screen.getByTestId('hero-section')
    expect(section).toBeInTheDocument()
  })
})
