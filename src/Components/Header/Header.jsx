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
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href=''>
            <img src={addDefault} alt='Añadir Icon' />
            <p>Nuevo Video</p>
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
