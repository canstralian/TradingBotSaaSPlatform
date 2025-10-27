import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Trading with 
              <span className="text-primary-300"> AI-Powered Bots</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Deploy intelligent trading bot swarms that execute sophisticated strategies 
              24/7. Maximize profits while minimizing risks with institutional-grade algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/signup" className="btn-primary flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="btn-secondary bg-transparent border-primary-300 text-primary-100 hover:bg-primary-800 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <TrendingUp className="w-8 h-8 text-success-500 mx-auto mb-2" />
                <p className="text-primary-200 font-semibold">98.7% Uptime</p>
              </div>
              <div>
                <Shield className="w-8 h-8 text-success-500 mx-auto mb-2" />
                <p className="text-primary-200 font-semibold">Bank-Level Security</p>
              </div>
              <div>
                <Zap className="w-8 h-8 text-success-500 mx-auto mb-2" />
                <p className="text-primary-200 font-semibold">Lightning Fast</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-300/20">
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400">trading_bot_swarm.py</span>
                </div>
                <div className="text-green-400">
                  <p className="mb-2"># Fetching live market data...</p>
                  <p className="text-blue-400 mb-1">async def fetch_market_data():</p>
                  <p className="ml-4 text-white">Bitcoin: $67,230.45 ↗ +2.4%</p>
                  <p className="ml-4 text-white">Ethereum: $3,890.12 ↗ +1.8%</p>
                  <p className="text-green-500 mt-2">✓ Bot swarm active - 24/7 monitoring</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-400/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-success-500/10 rounded-full animate-float"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero