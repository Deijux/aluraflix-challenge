import { PropTypes } from 'prop-types'
import CardExample from '../../assets/cardExample.jpg'
import TrashIcon from '../../assets/trashIcon.png'
import EditIcon from '../../assets/editIcon.png'
import Style from './Card.module.css'

function Card({ style, divider, onEdit }) {
  return (
    <div style={style} className={Style.Card}>
      <img src={CardExample} alt='Card Example' />
      <div style={divider} className={Style.CardInfo}>
        <button className={Style.CardSection}>
          <img src={TrashIcon} alt='Trash Icon' />
          <p>BORRAR</p>
        </button>
        <button
          className={Style.CardSection}
          onClick={() => {
            onEdit()
          }}
        >
          <img src={EditIcon} alt='Edit Icon' />
          <p>EDITAR</p>
        </button>
      </div>
    </div>
  )
}

Card.propTypes = {
  style: PropTypes.object,
  divider: PropTypes.object,
  onEdit: PropTypes.func,
}

export default Card
