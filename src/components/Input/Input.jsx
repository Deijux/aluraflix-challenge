import { PropTypes } from 'prop-types'
import Style from './Input.module.css'

function Input({ type, placeholder, value, name, id, onChange }) {
  return (
    <input
      className={Style.input}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
