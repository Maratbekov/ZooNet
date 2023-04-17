import './Katalog.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Filter from './filter/Filter'

const Katalog = () => {
  const dataAnimals = useSelector((state) => state.animalsSlice)

  return (
    <section id="karalog">
      <div className="container">
        <div className="katalog">
          <h1 className="katalog__title">Каталог животных</h1>
          <Filter />
          <div className="katalog__cards">
            {dataAnimals.animals.slice(0, 13).map((item) => (
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
          <div className="center">
          <button className='addItemBtn'>Показать еще</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Katalog
