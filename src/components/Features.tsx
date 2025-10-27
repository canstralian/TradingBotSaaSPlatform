import React from 'react'
import { Bot, Shield, TrendingUp, Zap, Clock, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Strategies',
      description: 'Advanced machine learning algorithms analyze market patterns and execute trades with precision.'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your funds and data are protected with military-grade encryption and secure API management.'
    },
    {
      icon: TrendingUp,
      title: 'Portfolio Optimization',
      description: 'Automatically rebalance and optimize your portfolio based on market conditions and risk tolerance.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Execute trades in milliseconds with our high-performance infrastructure and direct exchange connections.'
    },
    {
      icon: Clock,
      title: '24/7 Market Monitoring',
      description: 'Never miss an opportunity with round-the-clock market surveillance and automated trading.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reporting and analytics to track performance and optimize your trading strategies.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Powerful Features for Professional Traders
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our platform combines cutting-edge technology with intuitive design to deliver 
            the most advanced trading automation available today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-8 rounded-xl border border-gray-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 text-primary-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features