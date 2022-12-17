import { motion } from 'framer-motion'
import './BurgerMenu.scss'

const backDrop = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      type: 'tween',
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      duration: 0.7,
      type: 'tween',
    }
  }
}

const links = ['Business areas', 'Featured images', 'Gear cage', 'Contact', 'Get template']

interface IProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu(props: IProps) {
  return (
    <motion.div
      className='burger-menu__wrapper'
      variants={backDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container">
        <div className='burger-menu'>
          {links.map((link, i) =>
            <motion.a
              key={i}
              href="#"
              whileHover={{ color: 'rgba(255, 255, 255, 1)' }}
              transition={{ duration: 0.3 }}
            >
              {link}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}