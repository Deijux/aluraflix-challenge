import { PropTypes } from 'prop-types'
import Input from '../Input/Input'
import OptionList from '../OptionList/OptionList'
import categoryData from '../../data/CategoryData'
import ExitIcon from '../../assets/exitIcon.png'
import Style from './Modal.module.css'

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className={Style.containerModal}>
      <div className={Style.modal}>
        <h2>EDITAR CARD:</h2>
        <button className={Style.exitIcon} onClick={onClose}>
          <img src={ExitIcon} alt='Close Icon' />
        </button>
        <form className={Style.form}>
          <div className={Style.allInputs}>
            <div className={Style.input}>
              <label htmlFor='titulo'>Título</label>
              <Input
                type='text'
                name='titulo'
                id='titulo'
                placeholder='Título'
                value='Título'
              />
            </div>
            <div className={Style.input}>
              <label htmlFor='categoria'>Categoría</label>
              <OptionList
                name='categoria'
                id='categoria'
                optionsAll={categoryData}
              />
            </div>
            <div className={Style.input}>
              <label htmlFor='imagen'>Imagen</label>
              <Input
                type='url'
                name='imagen'
                id='imagen'
                placeholder='Imagen'
                value='Imagen'
              />
            </div>
            <div className={Style.input}>
              <label htmlFor='video'>Video</label>
              <Input
                type='url'
                name='video'
                id='video'
                placeholder='Video'
                value='Video'
              />
            </div>
            <div className={Style.input}>
              <label htmlFor='descripcion'>Descripción</label>
              <textarea
                name='descripcion'
                id='descripcion'
                placeholder='Descripción'
              ></textarea>
            </div>
          </div>
          <div className={Style.buttons}>
            <button type='submit'>GUARDAR</button>
            <button type='reset'>LIMPIAR</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
