import style from './Mission.module.css'
import missionImg from '../../../assets/images/missionImg.png'

const Mission = () => {
  return (
    <div className={style.mission}>
            <div className={style.missionLeft}>
              <h1>Наша миссия</h1>

              <img
                src={missionImg}
                alt=""
              />
            </div>

            <div className={style.missionRight}>
              <h2>Мы хотим помочь животным найти добрые руки</h2>
              <p>
                Также объединить питомники/приюты/частных заводчиков и людей
                ищущих на одной платформе, чтобы все животные имели шанс найти
                своего доброго и любящего хозяина.
              </p>
            </div>
          </div>
  )
}

export default Mission