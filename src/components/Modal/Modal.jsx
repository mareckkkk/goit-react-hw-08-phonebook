import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";

const PopupWindow = ({ show, contactData, closeModal }) => {
  const dispatch = useDispatch();
  const contact = JSON.parse(contactData);

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleChangeName = (ev) => {
    const text = ev.target.value;
    setName(text);
  };

  const handleChangeNum = (ev) => {
    const text = ev.target.value;
    setNumber(text);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(editContact({ id: contact.id, name: name, number: number }));
    closeModal();
  };

  return ReactDOM.createPortal(
    show && (
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <h3>Edit Contact</h3>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Z '\-]+$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                autoComplete="true"
                value={name}
                onChange={handleChangeName}
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
                value={number}
                onChange={handleChangeNum}
              />
            </label>
            <button type="submit" className={styles.done}>
              Done
            </button>
            <button
              type="button"
              className={styles.cancel}
              onClick={closeModal}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    ),
    document.querySelector("#popup-root"),
  );
};

export default PopupWindow;
