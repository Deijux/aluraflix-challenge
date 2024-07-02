import { PropTypes } from 'prop-types'
import CardExample from '../../assets/cardExample.jpg'
import TrashIcon from '../../assets/trashIcon.png'
import EditIcon from '../../assets/editIcon.png'
import Style from './Card.module.css'

function Card({ style, divider }) {
  return (
    <div style={style} className={Style.Card}>
      <img src={CardExample} alt='Card Example' />
      <div style={divider} className={Style.CardInfo}>
        <div className={Style.CardSection}>
          <img src={TrashIcon} alt='Trash Icon' />
          <p>BORRAR</p>
        </div>
        <div className={Style.CardSection}>
          <img src={EditIcon} alt='Edit Icon' />
          <p>EDITAR</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  style: PropTypes.object,
  divider: PropTypes.object,
}

export default Card
