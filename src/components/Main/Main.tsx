import { motion } from 'framer-motion'
import React from 'react'
import { Parallax } from 'react-parallax'
import { fadeVariants } from '../../variants/variants'
import Summary from '../Summary/Summary'
import bg from '../../img/bg.jpg'
import './Main.scss'

export default function Main() {
  return (
    <div className='main'>
      <Parallax bgImage={bg} strength={400} className="main__bg">
        <div className='main__content'>
          <motion.div className="main__title"
            variants={fadeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="main__subtitle">PHOTOGRAPHER & FILMMAKER</p>
            <h1>Aperture Studios</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </motion.div>
          <Summary speed='1/2000s' aperture='f/11' iso='100' geo='Iceland' />
        </div>
      </Parallax>
    </div>
  )
}
