import { PropTypes } from 'prop-types'
import Card from '../Card/Card'
import Style from './Category.module.css'

function Category({ title }) {
  let styles = {}
  let stylesCard = {}
  let divider = {}

  switch (title) {
    case 'FRONT END':
      styles = {
        backgroundColor: 'var(--color-front)',
      }
      stylesCard = {
        boxShadow: 'inset 0px 5px 20px 0px var(--color-front)',
        border: 'solid 5px var(--color-front)',
      }
      divider = {
        borderTop: 'solid 5px var(--color-front)',
      }
      break
    case 'BACK END':
      styles = {
        backgroundColor: 'var(--color-back)',
      }
      stylesCard = {
        boxShadow: 'inset 0px 5px 20px 0px var(--color-back)',
        border: 'solid 5px var(--color-back)',
      }
      divider = {
        borderTop: 'solid 5px var(--color-back)',
      }
      break
    case 'INNOVACIÓN Y GESTIÓN':
      styles = {
        backgroundColor: 'var(--color-innovación-gestión)',
      }
      stylesCard = {
        boxShadow: 'inset 0px 5px 20px 0px var(--color-innovación-gestión)',
        border: 'solid 5px var(--color-innovación-gestión)',
      }
      divider = {
        borderTop: 'solid 5px var(--color-innovación-gestión)',
      }
      break
    default:
      styles = {
        backgroundColor: 'var(--color-front)',
      }
      stylesCard = {
        boxShadow: 'inset 0px 5px 20px 0px var(--color-front)',
      }
      divider = {
        borderTop: 'solid 5px var(--color-front)',
      }
      break
  }

  return (
    <div className={Style.category}>
      <h3 style={styles} className={Style.categoryTitle}>
        {title}
      </h3>
      <div className={Style.cardList}>
        <Card style={stylesCard} divider={divider} />
        <Card style={stylesCard} divider={divider} />
        <Card style={stylesCard} divider={divider} />
      </div>
    </div>
  )
}

Category.propTypes = {
  title: PropTypes.string,
}

export default Category
