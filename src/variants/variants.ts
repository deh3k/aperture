export const fadeBotVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1
    }
  }
}

export const fadeVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.4,
    }
  }
}
