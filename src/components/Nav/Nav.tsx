import React from 'react'
import './Nav.scss'

export default function Nav() {
  return (
    <ul className='nav'>
      <li className='nav__item'><a href="#">Business areas</a></li>
      <li className='nav__item'><a href="#">Featured images</a></li>
      <li className='nav__item'><a href="#">Gear cage</a></li>
      <li className='nav__item'><a href="#">Contact</a></li>
    </ul>
  )
}
