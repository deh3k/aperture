import { motion } from 'framer-motion'
import React from 'react'
import tools from '../../img/tools.jpg'
import { fadeVariants } from '../../variants/variants'
import Summary from '../Summary/Summary'
import './Tools.scss'

export default function Tools() {
  return (
    <div className='tools'>
      <motion.div className='tools__title'
        variants={fadeVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className='tools__title__wrapper'>
          <p className='tools__sub'>THE GEAR CAGE</p>
          <h6>The tools that we use.</h6>
          <p>
            The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film".
            While we don't shoot (a lot) of film these days — these are the tools that we actually
            use everyday to capture the amazing things around us.
          </p>
          <button className='btn'>Check it out</button>
        </div>
      </motion.div>
      <div className='tools__img'>
        <div className='tools__summary'>
          <Summary speed='0,8"' aperture='f/5,6' iso='100' geo='Sweden' />
        </div>
        <img src={'https://img.freepik.com/premium-photo/top-view-of-work-space-photographer-with-digital-camera-flash-cleaning-kit-memory-card-tripod-and-camera-accessory-on-black-table-background_160097-52.jpg?w=826'} alt="" />
      </div>
    </div>
  )
}
