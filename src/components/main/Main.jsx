import React from 'react'
import { useSelector } from 'react-redux'
import style from './Main.module.css'

import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

import './slick.css'
import './slick-them.css'

import Slider from 'react-slick'
import Mission from './mission/Mission'
import Cards from './cards/Cards'

const Main = () => {
  const mainData = useSelector((s) => s.animalsSlice.mainData)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section id={style.main}>
      <div className="container">
        <div className={style.main}>
          <Slider {...settings}>
            {mainData.map((item) => (
              <div className={style.card}>
                <div className={style.left}>
                  <h1 className={style.card__title}>{item.title}</h1>
                  <p className={style.card__addres}>{item.addres}</p>
                  <p className={style.card__grafik}>{item.grafik}</p>
                  <Link
                    to={`https://wa.me/${item.whatsapp}`}
                    className={style.whatsapp}
                  >
                    <div className={style.whatsappIcon}>
                      <FaWhatsapp />
                    </div>
                    +996 {item.whatsapp}
                  </Link>
                </div>

                <div className={style.right}>
                  <img
                    className={style.img}
                    src={item.img}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
          <Mission/>

          <Cards/>
        </div>
      </div>
    </section>
  )
}

export default Main
