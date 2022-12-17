import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import './BurgerMenu.scss'

const burgerVariants = {
  hidden: {
    x: 0,
    pathLength: 0
  },
  visible: (custom: number) => ({
    pathLength: 1,
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      delay: custom > 2 ? 0.125 * custom : 0.5 - (0.125 * custom),
      ease: 'easeInOut',
      time: [0, 0.01],
    }
  }),
  exit: (custom: number) => ({
    pathLength: 0,
    opacity: [1, 1, 0],
    transition: {
      duration: 0.3,
      delay: custom > 2 ? 0.5 - (0.125 * custom) : 0.125 * custom,
      ease: 'easeInOut',
      time: [0, 0.29, 0.3]
    }
  }),
}

interface IProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Burger(props: IProps) {

  return (
    <div className="burger" onClick={() => props.setIsOpen(!props.isOpen)}>
      <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <AnimatePresence>
          {!props.isOpen &&
            <>
              <motion.path
                variants={burgerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={0}
                d="M2 2H40" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
              <motion.path
                variants={burgerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={1}
                d="M2 18H40" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
              <motion.path
                variants={burgerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={2}
                d="M2 34H40" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
            </>
          }
        </AnimatePresence>
        <AnimatePresence >
          {props.isOpen &&
            <>
              <motion.path
                variants={burgerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={3}
                d="M2 2L40 34" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
              <motion.path
                variants={burgerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={4}
                d="M40 2L2 34" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
            </>
          }
        </AnimatePresence>
      </svg>
    </div>
  )
}
