import { useState, useEffect } from 'react'
import OptionList from '../../components/OptionList/OptionList'
import { useData } from '../../contexts/DataContext'
import Style from './NewVideo.module.css'

function NewVideo() {
  const { categories = [], postVideo } = useData()

  const initialData = {
    title: '',
    category: '',
    photo: '',
    link: '',
    description: '',
  }

  const [data, setData] = useState(initialData)

  useEffect(() => {
    if (categories.length > 0) {
      setData(prevData => ({
        ...prevData,
        category: categories[0].name,
      }))
    }
  }, [categories])

  const handleSubmit = e => {
    e.preventDefault()
    postVideo(data)
  }

  const handleChange = e => {
    const { id, value } = e.target
    setData({ ...data, [id]: value })
  }

  return (
    <section className={Style.newVideo}>
      <div className={Style.title}>
        <h1>NUEVO VIDEO</h1>
        <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
      </div>
      <form className={Style.container}>
        <h2>Crear Tarjeta</h2>
        <div className={Style.allInputs}>
          <div className={Style.input}>
            <label htmlFor='title'>Título</label>
            <input
              id='title'
              type='text'
              placeholder='Ingrese el título'
              onChange={handleChange}
            />
          </div>
          <div className={Style.input}>
            <label htmlFor='category'>Categoría</label>
            <OptionList
              section='addVideo'
              name='category'
              id='category'
              optionsAll={categories}
              onChange={e => {
                handleChange({
                  target: { id: 'category', value: e.target.value },
                })
              }}
            />
          </div>
          <div className={Style.input}>
            <label htmlFor='photo'>Imagen</label>
            <input
              id='photo'
              type='url'
              placeholder='Ingrese el enlace de la imagen'
              onChange={handleChange}
            />
          </div>
          <div className={Style.input}>
            <label htmlFor='link'>Video</label>
            <input
              id='link'
              type='url'
              placeholder='Ingrese el enlace del video'
              onChange={handleChange}
            />
          </div>
          <div className={Style.input}>
            <label htmlFor='description'>Descripción</label>
            <textarea
              name='description'
              id='description'
              cols='30'
              placeholder='¿De que trata este video?'
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className={Style.buttons}>
          <button onClick={handleSubmit} type='submit'>
            GUARDAR
          </button>
          <button type='reset'>LIMPIAR</button>
        </div>
      </form>
    </section>
  )
}

export default NewVideo
