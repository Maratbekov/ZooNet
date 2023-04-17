import React, { useState } from 'react'
import style from './Hero.module.css'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Hero = () => {
  const [nav, setNav] = useState(false)
  return (
    <section id={style.hero}>
      <div className="container">
        <div className={style.hero}>
          <nav className={
             nav ? [style.navbar, style.active].join(' ') : [style.navbar]
          }>
            <ul
              className={style.menu}
            >
              <li>
                <NavLink to="katalog">Каталог</NavLink>
              </li>
              <li>
                {' '}
                <NavLink
                  to="hostel"
                  className="ab"
                >
                  Хостелы/приюты
                </NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="kliniki">Вет клиники</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="veterinary">Ветеринары</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="zooMagazin">Зоомагазины</NavLink>
              </li>
              <li>
                {' '}
                <NavLink to="zoonani">Зооняни</NavLink>
              </li>
            </ul>

            <button className={style.addBtn}>Подать объявление</button>
          </nav>

          <div
            onClick={() => setNav(!nav)}
            className={style.mobile_btn}
          >
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
