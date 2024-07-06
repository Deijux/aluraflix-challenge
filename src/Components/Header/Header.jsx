import { NavLink } from 'react-router-dom'
import logoHeader from '../../assets/logoHeader.png'
import addDefault from '../../assets/add-default.png'
import homeDefault from '../../assets/home-default.png'
import Styles from './Header.module.css'

function Header() {
  return (
    <header className={Styles.header}>
      <NavLink to='/'>
        <img src={logoHeader} alt='Aluraflix Logo' />
      </NavLink>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? `${Styles.link} ${Styles.linkActive}` : Styles.link
            }
          >
            <img src={homeDefault} alt='Home Icon' />
            <p>HOME</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/newvideo'
            className={({ isActive }) =>
              isActive ? `${Styles.link} ${Styles.linkActive}` : Styles.link
            }
          >
            <img src={addDefault} alt='Añadir Icon' />
            <p>NUEVO VIDEO</p>
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
