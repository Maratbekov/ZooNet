import './Cards.css' 
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Cards = () => {
    const dataAnimals = useSelector((state) => state.animalsSlice)
  return (
    <section id="cards">
      <div className="container">
        <div className="d-flex">
          <h3 className="card__title">Твой маленький друг ждет тебя</h3>

          <button className="card__btn">Смотреть весь каталог</button>
        </div>

        <div className="cards">
        {dataAnimals.animals.slice(0, 3).map((item) => (
              <div
                className="card"
                key={item.id}

              >
                <img
                  src={item.img}
                  alt={item.specialSign}
                />
                <h2>{item.breed}</h2>
                <span className="yer">{item.age}год</span>
                <span className="name">{item.gender}</span> <br />
                <div className="top">
                  <span className="price">{item.price} сом</span>
                  <Link className="detail">{item.detailBtn}</Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Cards
