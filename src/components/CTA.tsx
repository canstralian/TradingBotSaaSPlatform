import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-max text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Trading Success?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join thousands of professional traders who have automated their success with our AI-powered trading bots. 
            Start your free trial today and see the difference intelligent automationcan make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/signup" 
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 text-lg font-semibold"
            >
              Watch Demo
            </Link>
          </div>
          <div className="mt-8 text-primary-100">
            <p>No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA