import logoHeader from '../../assets/logoHeader.png'
import addDefault from '../../assets/add-default.png'
import homeDefault from '../../assets/home-default.png'
import Styles from './Header.module.css'

function Header() {
  return (
    <header className={Styles.header}>
      <img src={logoHeader} alt='Aluraflix Logo' />
      <ul>
        <li>
          <a href=''>
            <img src={homeDefault} alt='Home Icon' />
            Home
          </a>
        </li>
        <li>
          <a href=''>
            <img src={addDefault} alt='Añadir Icon' />
            Nuevo Video
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
