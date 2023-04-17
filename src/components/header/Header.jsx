
import './Header.css'
import logo from '../../assets/images/logo.svg'
import {Link} from 'react-router-dom'
import { IconName } from "react-icons/fa";

const Header = () => {
  return (
    <header id='header'>
       <div className="container">
        <div className="header">
          <div className="flex">
          <div className="logo">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>

            <div className="login">
                <Link>Войти</Link>
                <div className="verticalLine"/>
                <Link>Зарегистрироваться</Link>
            </div>
          </div>
        </div>
       </div>
    </header>
  )
}

export default Header