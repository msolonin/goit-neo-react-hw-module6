import css from './Contact.module.css';

const Contact = ({id, name, number, deleteContact }) => {
  return (
      <div className={css.contactCard}>
          <div className={css.contactInfo}>
              <span className={css.contactIcon}>📞</span>
              <div className={css.contactDetails}>
                  <span className={css.contactName}>{name}</span>
                  <span className={css.contactNumber}>{number}</span>
              </div>
          </div>
          <button onClick={() => deleteContact(id)} className={css.deleteBtn}>Delete</button>
      </div>
      // <div>
      //     <p>{name}</p>
      //     <p>{number}</p>
      //     <button onClick={() => deleteContact(name)}>Delete</button>
      // </div>
  );
};

export default Contact;