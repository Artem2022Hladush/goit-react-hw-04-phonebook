import PropTypes from "prop-types";
import css from "../Filter/Filter.module.css"

const Filter = ({value, onChange}) => {
return (
<div className={css.box}>
<label className={css.title__filter} htmlFor="filter">
      Fynd contacts by name 
		<input 
		className={css.input__filter}
		id="filter"
		type="text" 
		value={value} 
		onChange={onChange}
		/>
   </label>
</div>
)
}

Filter.propTypes = {
	value:PropTypes.string.isRequired,
	onChange:PropTypes.func.isRequired,
}
export default Filter;