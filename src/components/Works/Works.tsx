import { motion } from 'framer-motion'
import React from 'react'
import { fadeBotVariants } from '../../variants/variants'
import './Works.scss'
import WorksItem from './WorksItem'
import work4 from '../../img/work4.jpg'

const workList = [
  {
    id: 0,
    title: 'PRODUCT PHOTOGRAPHY',
    text: 'Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
    img: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '#',
  },
  {
    id: 1,
    title: 'ARCHITECTURE PHOTOGRAPHY',
    text: 'Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.',
    img: 'https://img1.fonwall.ru/o/te/architecture-cityscape-trees-landscapes.jpeg?route=mid&h=750',
    href: '#',
  },
  {
    id: 2,
    title: 'DRONE PHOTOGRAPHY',
    text: 'Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.',
    img: 'https://images.pexels.com/photos/8644013/pexels-photo-8644013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    href: '#',
  },
  {
    id: 3,
    title: 'WILDLIFE PHOTOGRAPHY',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.',
    img: work4,
    href: '#',
  }
]

export default function Works() {

  return (
    <div className='container'>
      <motion.div className="title"
        variants={fadeBotVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2>What we do</h2>
        <p>The areas that we're specialized in.</p>
      </motion.div>
      <div className="works__list">
        {workList.map((item, i) => <WorksItem key={item.id} work={item} i={i} />)}
      </div>
    </div>
  )
}
