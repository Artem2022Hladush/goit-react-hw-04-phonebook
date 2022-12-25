import css from "../ContactList/ContactLIst.module.css"
import Contact from "components/Contact/Contact";
import PropTypes from "prop-types"

const ContactList = ({contacts, onDeleteContact}) => {
return (
	<ul className={css.contact__list}>{contacts.map(({id, name, number}) => <li key = {id} className={css.contact__item}>
	<Contact 
	name={name} 
	number={number}
	onDeleteContact={() => onDeleteContact(id)}/>
</li>)}
</ul>
)
};

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
	})
	),
	onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;