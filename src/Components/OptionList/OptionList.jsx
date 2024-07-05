import { PropTypes } from 'prop-types'
import Style from './OptionList.module.css'

function OptionList({ name, id, optionsAll }) {
  return (
    <select className={Style.select} name={name} id={id}>
      {optionsAll.map((options, index) => (
        <option className={Style.option} key={index} value={options.name}>
          {options.name}
        </option>
      ))}
    </select>
  )
}

OptionList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  optionsAll: PropTypes.array.isRequired,
}

export default OptionList
