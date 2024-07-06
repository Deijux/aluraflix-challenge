import OptionList from '../../Components/OptionList/OptionList'
import categoryData from '../../data/CategoryData'
import Style from './NewVideo.module.css'

function NewVideo() {
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
            <label htmlFor='titulo'>Titulo</label>
            <input id='titulo' type='text' placeholder='Ingrese el título' />
          </div>
          <div className={Style.input}>
            <label htmlFor='categoria'>Categoría</label>
            <OptionList
              section='addVideo'
              name='categoria'
              id='categoria'
              optionsAll={categoryData}
            />
          </div>
          <div className={Style.input}>
            <label htmlFor='imagen'>Imagen</label>
            <input type='url' placeholder='Ingrese el enlace de la imagen' />
          </div>
          <div className={Style.input}>
            <label htmlFor='video'>Video</label>
            <input type='url' placeholder='Ingrese el enlace del video' />
          </div>
          <div className={Style.input}>
            <label htmlFor='descripcion'>Descripción</label>
            <textarea
              name='descripcion'
              id='descripcion'
              cols='30'
              placeholder='¿De que trata este video?'
            ></textarea>
          </div>
        </div>
        <div className={Style.buttons}>
          <button type='submit'>GUARDAR</button>
          <button type='reset'>LIMPIAR</button>
        </div>
      </form>
    </section>
  )
}

export default NewVideo
