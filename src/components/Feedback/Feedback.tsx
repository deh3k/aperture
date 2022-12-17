import { motion } from 'framer-motion'
import React from 'react'
import { fadeVariants } from '../../variants/variants'
import './Feedback.scss'

export default function Feedback() {
  return (
    <motion.div className="feedback__title title"
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2>Need help with photography or videography?</h2>
      <p>We're here for you!</p>
      <button className="btn">Get in touch</button>
    </motion.div>
  )
}
