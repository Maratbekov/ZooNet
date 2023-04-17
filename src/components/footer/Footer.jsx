import logo from '../../assets/images/footerLogo.svg'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer">
          <div className="footerLogo">
            <img
              src={logo}
              alt=""
            />
          </div>
          <div className="nav">
            <Link>Главная</Link>
            <Link>О проекте</Link>
            <Link>Для партнеров</Link>
            <Link>Контакты</Link>
          </div>

          <div className="contakts">
            <span>Телефон:</span>
            <Link to="tel: +996775465426" className='phone'>+996 775 465 426</Link>
            <span>Email:</span>
            <Link to="mailto:zoonet@gmail.com">zoonet@gmail.com</Link>
          </div>

          <div className="socials">
            <span>Мы в соц. сетях:</span>
           <div className="flex">
           <div className="social">
              <Link>
                <FaInstagram />
              </Link>
            </div>

            <div className="social">
              <Link>
                <FaWhatsapp/>
              </Link>
            </div>

            <div className="social">
              <Link>
                <FaTelegramPlane/>
              </Link>
            </div>
          </div>
           </div>
        </div>
        <p style={{
          marginTop: '30px'
        }}>2023 ©ZooNet</p>
      </div>
    </footer>
  )
}

export default Footer
