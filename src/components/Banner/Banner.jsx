import { PropTypes } from 'prop-types'
import backgroundBanner from '../../assets/backgroundBanner.png'
import Style from './Banner.module.css'

function Banner({ data }) {
  const dataInfo = data[0]
  return (
    <section className={Style.banner}>
      <img
        className={Style.backgroundImage}
        src={backgroundBanner}
        alt='Imagen background'
      />
      {dataInfo && (
        <>
          <div className={Style.titleBanner}>
            <h1>{dataInfo?.category}</h1>
            <div className={Style.infoBanner}>
              <h2>{dataInfo?.title}</h2>
              <p>{dataInfo?.description}</p>
            </div>
          </div>
          <a
            className={Style.imageLink}
            href={dataInfo?.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className={Style.playerImage}
              src={dataInfo?.photo}
              alt='Player'
            />
          </a>
        </>
      )}

      {dataInfo === undefined && (
        <div className={Style.titleBanner}>
          <h2>Ocurrió un error con el servidor!</h2>
        </div>
      )}
    </section>
  )
}

Banner.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Banner
