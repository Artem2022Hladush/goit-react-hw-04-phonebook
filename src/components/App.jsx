import  React, {Component} from "react";
import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";
import {nanoid} from "nanoid"


class App extends Component {
state = {
  contacts: [],

  filter: "",
};

addContact = ({name, number}) => {
  

  const contact = {
    id: nanoid(),
    name,
    number
  }

  this.setState(pervState => ({
    contacts: [contact, ...pervState.contacts],
  }))
}


handleDeleteContact = (contactId) => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId),
}))
};

changeFilter = e => {
  this.setState({filter: e.currentTarget.value})
};

getFilterContact =()=> {
const {filter, contacts} = this.state;

  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
}

componentDidMount() {
  const contact = localStorage.getItem('contact');
  const parsedContact = JSON.parse(contact);
  if(parsedContact) {
    this.setState({contacts: parsedContact});
  }
}

componentDidUpdate(prevProps, prevState) {
  if(this.state.contacts !== prevState.contacts) {
    localStorage.setItem('contact', JSON.stringify(this.state.contacts))
  }
}

render() {
const { filter} =this.state;

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
    <ContactEditor onSubmit={this.addContact}/>
    <Filter value={filter} onChange={this.changeFilter}/>
    <h2 className="title">Contacts</h2>
    <ContactList contacts={this.getFilterContact()} onDeleteContact={this.handleDeleteContact}/>
    </div>
  )
}
};

export default App;
