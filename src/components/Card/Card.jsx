import { PropTypes } from 'prop-types'
import TrashIcon from '../../assets/trashIcon.png'
import EditIcon from '../../assets/editIcon.png'
import Style from './Card.module.css'

function Card({ style, divider, onEdit, onDelete, image, link }) {
  return (
    <div style={style} className={Style.Card}>
      <a
        className={Style.imgLink}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={image} width='530px' alt='Card Example' />
      </a>
      <div style={divider} className={Style.CardInfo}>
        <button className={Style.CardSection} onClick={onDelete}>
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
  image: PropTypes.string,
  link: PropTypes.string,
  onDelete: PropTypes.func,
}

export default Card
