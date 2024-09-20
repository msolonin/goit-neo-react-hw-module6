import Contact from "../Contact/Contact.jsx";

const ContactList = ({contacts, deleteContact}) => {
  return (
      contacts.map((item) => <Contact key={item.id}
                                      id={item.id}
                                      name={item.name}
                                      number={item.number}
                                      deleteContact={deleteContact} />)
  );
};

export default ContactList;
