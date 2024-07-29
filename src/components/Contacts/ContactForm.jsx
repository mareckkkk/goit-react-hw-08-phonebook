import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { getStateContactsSlice } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const { allContact } = useSelector(getStateContactsSlice);

  const submitHandler = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;
    if (allContact.find((obj) => obj.name === nameValue)) {
      alert(nameValue + " is already in contacts");
    } else {
      dispatch(addContact({ name: nameValue, number: numberValue }));
      form.reset();
    }
  };

  return (
    <div className={styles.contactform}>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z '\-]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="true"
          />
        </label>
        <label className={styles.label}>
          Phone
          <input
            type="tel"
            name="number"
            pattern="^\+?[0-9\(\) \-]+$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="true"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.add_button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
