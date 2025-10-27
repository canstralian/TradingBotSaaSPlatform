import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TradingBot Swarm has revolutionized our trading operations. The AI strategies consistently outperform our manual trading by 40%.",
      author: "Sarah Chen",
      role: "Portfolio Manager",
      company: "Crypto Capital",
      avatar: "SC"
    },
    {
      quote: "The security features and API integration are top-notch. We've processed over $50M in trades without a single security incident.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "Digital Assets Fund",
      avatar: "MR"
    },
    {
      quote: "Finally, a trading bot platform that actually works. The 24/7 monitoring has caught opportunities we would have missed.",
      author: "Emily Thompson",
      role: "Investment Director",
      company: "BlockChain Ventures",
      avatar: "ET"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by Professional Traders
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of traders who trust our platform with their investments
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-primary-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials