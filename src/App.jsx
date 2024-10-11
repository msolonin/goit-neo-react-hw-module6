import './App.css'
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import contactsItems from "./data/contacts.json";
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';




function App() {
    // const localStorageContactsKey = 'contactsStorageItems'
    // const getDefaultContacts = () => {
	// 	const values = localStorage.getItem(localStorageContactsKey);
	// 	if (values !== null) {
	// 		return JSON.parse(values);
	// 	}
	// 	return contactsItems;
	// };
    //
    // const [contacts, setContacts] = useState(getDefaultContacts())
    // const [filter, setFilter] = useState('');
    //
    // const handleSubmitContact = (values) => {
    //     const newContact = { id: nanoid(), ...values };
    //     setContacts(contacts => [...contacts, newContact])
    // };
    //
    // const deleteContact = (ContactId) => {
    //     setContacts(contacts.filter(contact => contact.id !== ContactId))
    // };
    // const handleFilterChange = (event) => {
    //     setFilter(event.target.value);
    // };
    // const getFilteredContacts = () => {
    //     if (filter === '') {
    //         return contacts;
    //     }
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase())
    //     );
    // };
    //
    // useEffect(() => {
	// 	localStorage.setItem(localStorageContactsKey, JSON.stringify(contacts));
	// }, [contacts]);


  return (
      <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <br/>
          <ContactList />
      </div>
  )
}

export default App
