import  {useState, useEffect} from "react";
import ContactList from "./ContactList/ContactList";
import {ContactEditor} from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";
import {nanoid} from "nanoid"
import Notiflix from 'notiflix';


export function App() {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts' )) ?? []);
  const [filter, setFilter] = useState("")

  useEffect(()=> {
    window.localStorage.setItem('contact', JSON.stringify(contacts))
  }, [contacts])


  const addContact = ({ name, number }) => {
    const isAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return 1;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
  };


const handleDeleteContact = id => {
  setContacts(prevState => prevState.filter(contact => contact.id !== id));
};

const changeFilter = e => {
setFilter(e.target.value)
};

const getFilterContact =()=> {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
}

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
    <ContactEditor onSubmit={addContact}/>
    <Filter value={filter} onChange={changeFilter}/>
    <h2 className="title">Contacts</h2>
    <ContactList contacts={getFilterContact()} onDeleteContact={handleDeleteContact}/>
    </div>
  )
};