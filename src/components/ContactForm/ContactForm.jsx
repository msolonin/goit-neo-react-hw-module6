import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import css from './ContactForm.module.css';
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contactsSlice.js";

let validationSchema = yup.object({
  name: yup.string().required('Required').min(3, 'To short').max(50, 'To long').typeError('Must be a string'),
  number: yup.string().required('Required').min(3, 'To short').max(50, 'To long').typeError('Must be a number'),
});

const initialValues = {
  name: "",
  number: ""
};

const ContactForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (values, actions) => {
        const newContact = { id: nanoid(), ...values };
    //     setContacts(contacts => [...contacts, newContact])
		dispatch(addContact(newContact))
		actions.resetForm();
	};
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.formField}>
          <label>Name</label>
          <br/>
          <Field type="text" name="name"/>
          <ErrorMessage name="name" component="span" className={css.error}/>
          <br/>
          <br/>
          <label>Number</label>
          <br/>
          <Field type="text" name="number"/>
          <ErrorMessage name="number" component="span" className={css.error}/>
          <br/>
          <br/>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
