import backgroundBanner from '../../assets/backgroundBanner.png'
import playerBanner from '../../assets/playerBanner.png'
import Style from './Banner.module.css'

function Banner() {
  return (
    <section className={Style.banner}>
      <img
        className={Style.backgroundImage}
        src={backgroundBanner}
        alt='Imagen background'
      />
      <div className={Style.titleBanner}>
        <h1>FRONT END</h1>
        <div className={Style.infoBanner}>
          <h2>Challenge React</h2>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
      </div>
      <img className={Style.playerImage} src={playerBanner} alt='Player' />
    </section>
  )
}

export default Banner
