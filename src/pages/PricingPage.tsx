import React from 'react'
import { Check, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const PricingPage = () => {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for beginners getting started with automated trading',
      features: [
        'Up to 3 active bots',
        'Basic trading strategies',
        '5 supported exchanges',
        'Email support',
        'Basic analytics dashboard',
        '24/7 monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 79,
      period: 'month',
      description: 'Advanced features for serious traders and small funds',
      features: [
        'Up to 15 active bots',
        'Advanced AI strategies',
        '20+ supported exchanges',
        'Priority support',
        'Advanced analytics & reporting',
        'Risk management tools',
        'API access',
        'Custom indicators'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 199,
      period: 'month',
      description: 'Complete solution for professional funds and institutions',
      features: [
        'Unlimited active bots',
        'Custom AI model training',
        'All supported exchanges',
        'Dedicated account manager',
        'White-label solution',
        'Advanced risk controls',
        'Full API access',
        'Custom integrations',
        'Compliance tools'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Trading Plan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with our free trial, then choose the plan that scales with your trading needs. 
              All plans include 14-day money-back guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular 
                    ? 'border-primary-500 shadow-primary-100' 
                    : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-600 mb-4">
              All plans include 14-day free trial • No credit card required • Cancel anytime
            </p>
            <p className="text-gray-600">
              Need a custom solution? <a href="/contact" className="text-primary-600 hover:underline">Contact our sales team</a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage