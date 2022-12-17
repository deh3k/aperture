import React from 'react'
import logo1 from '../../img/logo-1.svg'
import logo2 from '../../img/logo-2.svg'
import logo3 from '../../img/logo-3.svg'
import logo4 from '../../img/logo-4.svg'
import logo5 from '../../img/logo-5.svg'
import { motion } from 'framer-motion'
import './Companies.scss'

const list = [logo1, logo2, logo3, logo4, logo5]

export default function Companies() {
  return (
    <div className='container'>
      <div className="companies__title title">
        <h2>Past clients</h2>
        <p>Trusted by your favourite companies</p>
      </div>
      <motion.div className='companies__list'

      >
        {list.map((logo, i) => <motion.img
          key={i}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', delay: i * 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          src={logo}
          alt=""
        />)}
      </motion.div>
    </div>
  )
}
