import React from "react"
import css from "../Contact/Contact.module.css"
import PropTypes from "prop-types"

const Contact = ({name, number, onDeleteContact}) => (
		<div className={css.contact}>
			<p className={css.name}>{name} :</p>
			<p className={css.number}>{number}</p>
			<button className={css.contact__button} type="button" onClick={onDeleteContact}>Delete</button>
		</div>
);

Contact.propTypes = {
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired
}

export default Contact