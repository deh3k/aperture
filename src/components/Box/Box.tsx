import React from 'react'
import { motion } from 'framer-motion'
import { fadeVariants } from '../../variants/variants'
import { Parallax } from 'react-parallax'
import './Box.scss'

interface IProps {
  img: string
  note: React.ReactNode
  summary: React.ReactNode
}

export default function Box(props: IProps) {
  return (
    <div className='box'>
      <div className='box__content'>
        <Parallax bgImage={props.img} strength={200} className='box__img'>
          <div className='box__content__wrapper'>
            <motion.div className='box__info'
              variants={fadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {props.note}
            </motion.div>
            <div className='box__summary'>
              {props.summary}
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  )
}
