import { PropTypes } from 'prop-types'
import Style from './OptionList.module.css'

function OptionList({ section, name, id, optionsAll }) {
  let styles = {}

  if (section == 'addVideo') {
    styles = {
      border: '3px solid #262626',
      borderRadius: '4px',
      padding: '10px 5px',
    }
  }

  return (
    <select style={styles} className={Style.select} name={name} id={id}>
      {optionsAll.map((options, index) => (
        <option className={Style.option} key={index} value={options.name}>
          {options.name}
        </option>
      ))}
    </select>
  )
}

OptionList.propTypes = {
  section: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  optionsAll: PropTypes.array.isRequired,
}

export default OptionList
