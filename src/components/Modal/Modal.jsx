import { useState, useEffect, useMemo } from 'react'
import { PropTypes } from 'prop-types'
import Input from '../Input/Input'
import OptionList from '../OptionList/OptionList'
import { GiCancel } from 'react-icons/gi'
import Style from './Modal.module.css'

function Modal({ isOpen, onClose, cardActive, onUpdate, categories }) {
  const initialFormData = useMemo(
    () => ({
      title: '',
      category: '',
      photo: '',
      link: '',
      description: '',
    }),
    [],
  )

  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    if (isOpen && cardActive) {
      setFormData({ ...cardActive })
    }
  }, [cardActive, isOpen, initialFormData])

  const handleChange = e => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value.toString() })
  }

  const handleSave = e => {
    e.preventDefault()
    onUpdate(formData)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className={Style.containerModal}>
      <div className={Style.modal}>
        <h2>EDITAR CARD:</h2>
        <button className={Style.exitIcon} onClick={onClose}>
          <GiCancel size={35} color='white' />
        </button>
        <form className={Style.form}>
          <div className={Style.allInputs}>
            <div className={Style.input}>
              <label htmlFor='titulo'>Título</label>
              <Input
                type='text'
                name='title'
                id='title'
                placeholder='Título'
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className={Style.input}>
              <label htmlFor='categoria'>Categoría</label>
              <OptionList
                name='category'
                id='category'
                optionsAll={categories}
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className={Style.input}>
              <label htmlFor='imagen'>Imagen</label>
              <Input
                type='url'
                name='photo'
                id='photo'
                placeholder='Imagen'
                value={formData.photo}
                onChange={handleChange}
              />
            </div>
            <div className={Style.input}>
              <label htmlFor='video'>Video</label>
              <Input
                type='url'
                name='link'
                id='link'
                placeholder='Video'
                value={formData.link}
                onChange={handleChange}
              />
            </div>
            <div className={Style.input}>
              <label htmlFor='descripcion'>Descripción</label>
              <textarea
                name='description'
                id='description'
                placeholder='Descripción'
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className={Style.buttons}>
            <button onClick={handleSave} type='submit'>
              GUARDAR
            </button>
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
  cardActive: PropTypes.object,
  onUpdate: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}

export default Modal
