import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

interface IWork {
  title: string
  text: string
  img: string
  href: string
}

interface IProps {
  i: number
  work: IWork
}

const workVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

export default function WorksItem({ work, i }: IProps) {

  const [isHover, setIsHover] = useState<boolean>(false)

  const innerWidth = window.innerWidth

  useEffect(() => {
    if (innerWidth < 1024) {
      setIsHover(true)
    }
  }, [innerWidth])

  const mouseEnterHandler = () => {
    if (innerWidth > 1024) {
      setIsHover(true)
    }
  }

  const mouseLeaveHandler = () => {
    if (innerWidth > 1024) {
      setIsHover(false)
    }
  }

  return (
    <motion.div className='works-item'
      variants={workVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7, type: 'spring', delay: i % 2 * 0.3 }}
      viewport={{ once: true, amount: 0.2, }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className='works-item__img'>
        <img src={work.img} alt="" />
      </div>
      <AnimatePresence>
        {isHover &&
          <motion.div className='works-item__content'
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.25, type: 'tween' }}
          >
            <div className='works-item__content__wrapper'>
              <div className='note'>
                <h6>
                  {work.title}
                </h6>
                <p>
                  {work.text}
                </p>
              </div>
              <button className='btn'>Read more</button>
            </div>
          </motion.div>
        }
      </AnimatePresence>

    </motion.div>
  )
}
