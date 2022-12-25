import  {useState} from "react";
import PropTypes from "prop-types"
import css from "../ContactEditor/ContactEditor.module.css"

export function ContactEditor({onSubmit}) {

const [name, setName] = useState("");
const [number, setNumber] = useState("");

const handleChange = e => {

	switch(e.target.name) {
		case 'name':
			setName(e.target.value);
			break;

			case 'number':
				setNumber(e.target.value);
				break;

				default:
					return;
	}
}

const handleSubmit = e => {
	e.preventDefault();

	onSubmit({name, number})
setName('');
setNumber('');

}


	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<div>
			<label className={css.label} htmlFor="name">Name</label >
			<input
			className={css.input}
				type="text" 
				name="name"
				pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
				onChange={handleChange}
				value={name}
				id="name"
/>
			</div>
			<div>
			<label className={css.label} htmlFor="number">Number</label>
			<input
			className={css.input}
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				required
				id="number"
				onChange={handleChange}
				value={number}
			/>
			</div>
<button className={css.form__button} type="submit">Add Contact</button>
		</form>
	)
};

ContactEditor.propTypes ={
	onSubmit: PropTypes.func.isRequired,
}