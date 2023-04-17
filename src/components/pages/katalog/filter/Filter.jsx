import './Filter.css'
const Filter = () => {
  return (
    <section id="filter">
      <div className="container">
        <div className="filter">
          <select className="dogs">
            <option className="dogs__option">Собаки</option>
            <option className="dogs__option">Собаки</option>
            <option className="dogs__option">Собаки</option>
          </select>

          <select className="dogs">
            <option className="dogs__option">Порода</option>
            <option className="dogs__option">Авчерка</option>
            <option className="dogs__option">Алабай</option>
          </select>

          <select className="dogs">
            <option className="dogs__option">Возраст</option>
            <option className="dogs__option">2</option>
            <option className="dogs__option">6</option>
          </select>

          <select className="dogs">
            <option className="dogs__option">Пол</option>
            <option className="dogs__option">Мальчик</option>
            <option className="dogs__option">Девочка</option>
          </select>

          <input
            type="number"
            placeholder="Цена от"
            className="number"
          />

          <input
            type="number"
            placeholder="Цена до"
            className="pricee"
          />

          <select className="dogs">
            <option className="dogs__option">Все регионы</option>
            <option className="dogs__option">Бишкек</option>
            <option className="dogs__option">Ош</option>
          </select>

          <div className="checkbox">
            <input type="checkbox" />
            <p>Отдам даром</p>
          </div>

          <div className="buttons">
            <button className="search">Найти</button>

            <button className="reset">
              <span>&times; </span> Сбросить все
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filter
