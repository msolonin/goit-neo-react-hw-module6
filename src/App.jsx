import './App.css'
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import contactsItems from "./data/contacts.json";
import {useState} from "react";
import { nanoid } from 'nanoid';


function App() {
    const handleSubmitContact = (values) => {
        const newContact = { id: nanoid(), ...values };
        setContacts(contacts => [...contacts, newContact])
    };
    const [contacts, setContacts] = useState(contactsItems)
    const deleteContact = (name) => {
        setContacts(contacts.filter(contact => contact.name !== name))
    };
    const filterContacts = (event) => {
        const filter = event.target.value;
        if (filter === '') {
            setContacts(contactsItems);
            return;
        }
        const filteredContacts = contactsItems.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
        setContacts(filteredContacts);
    };
  return (
      <div>
          <h1>Phonebook</h1>
          <ContactForm saveContact={handleSubmitContact}/>
          <SearchBox filterContacts={filterContacts}/>
          <br/>
          <ContactList contacts={contacts} deleteContact={deleteContact}/>
      </div>
  )
}

export default App
