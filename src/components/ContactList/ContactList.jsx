import Contact from "../Contact/Contact.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteContact, selectContacts} from "../../redux/contactsSlice.js";
import {selectNameFilter} from "../../redux/filtersSlice.js";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const name = useSelector(selectNameFilter);
	const dispatch = useDispatch()

    const getFilteredContacts = () => {
        if (!contacts) {
            return [];
        }
        if (!name) {
            return contacts;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(name.toLowerCase())
        );
    };

    const filteredContacts = getFilteredContacts();

    const handleDeleteContact = (id) => {
          dispatch(deleteContact(id))
      }
    return (
      filteredContacts.map((item) => <Contact key={item.id}
                                      id={item.id}
                                      name={item.name}
                                      number={item.number}
                                      deleteContact={handleDeleteContact} />)
    );
};

export default ContactList;
