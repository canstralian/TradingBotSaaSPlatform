import React from 'react'
import { Link } from 'react-router-dom'
import { Bot, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-primary-400" />
              <span className="text-xl font-bold">TradingBot Swarm</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Advanced AI-powered trading bots for cryptocurrency markets. 
              Automate your trading strategy with institutional-grade technology.
            </p>
            <div className="flex space-x-4 mt-6">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Security</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 TradingBot Swarm. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer