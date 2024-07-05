import { PropTypes } from 'prop-types'
import Style from './Input.module.css'

function Input({ type, placeholder, value, name, id }) {
  return (
    <input
      className={Style.input}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Input
