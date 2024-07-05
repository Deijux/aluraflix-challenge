import { PropTypes } from 'prop-types'
import Card from '../Card/Card'
import Style from './Category.module.css'

function Category({ datos, onCardEdit }) {
  let { name, style } = datos
  const styles = {
    backgroundColor: `${style}`,
  }
  const stylesCard = {
    boxShadow: `inset 0px 5px 20px 0px ${style}`,
    border: `solid 5px ${style}`,
  }
  const divider = {
    borderTop: `solid 5px ${style}`,
  }

  return (
    <div className={Style.category}>
      <h3 style={styles} className={Style.categoryName}>
        {name}
      </h3>
      <div className={Style.cardList}>
        <Card
          style={stylesCard}
          divider={divider}
          onEdit={() => onCardEdit()}
        />
        <Card
          style={stylesCard}
          divider={divider}
          onEdit={() => onCardEdit()}
        />
        <Card
          style={stylesCard}
          divider={divider}
          onEdit={() => onCardEdit()}
        />
      </div>
    </div>
  )
}

Category.propTypes = {
  datos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
  }).isRequired,
  onCardEdit: PropTypes.func.isRequired,
}

export default Category
