import Styles from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getStateContactsSlice } from "../../redux/contacts/selectors";
import { getFilterWord } from "../../redux/filter/selectors";
import { change } from "../../redux/filter/filterSlice";
import { useEffect, useState } from "react";
import {
  deleteContact,
  fetchContactsThunk,
} from "../../redux/contacts/operations";
import PopupWindow from "../Modal/Modal";

const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, err, allContact } = useSelector(getStateContactsSlice);
  const filterText = useSelector(getFilterWord);

  const [openModal, setOpenModal] = useState(false);
  const [contact, setContact] = useState();

  const editHandler = (ev) => {
    const obj = ev.target.value;
    setContact(obj);
    setOpenModal(true);
  };

  const closeModal = (ev) => {
    setOpenModal(false);
  };

  const deleteFunc = (ev) => {
    const idContact = ev.target.value;
    dispatch(deleteContact(idContact));
  };

  const filtredContacts = (ev) => {
    const inputText = ev.target.value;
    dispatch(change(inputText));
  };

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className={Styles.rightPage}>
      {openModal && (
        <PopupWindow
          show={openModal}
          contactData={contact}
          closeModal={closeModal}
        />
      )}
      <h2>Contacts</h2>
      <label htmlFor="idFilter">Find contacts by name</label>
      <br />
      <input
        className={Styles.idFilter}
        id="idFilter"
        type="text"
        name="filter"
        onChange={filtredContacts}
        autoComplete="true"
      />
      <ul className={Styles.list}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          allContact &&
          allContact.map(
            (obj) =>
              obj.name.toLowerCase().includes(filterText.toLowerCase()) && (
                <li key={obj.id} className={Styles.itemList}>
                  <span>
                    {obj.name}:<br /> {obj.number}
                  </span>
                  <div className={Styles.buttonsDiv}>
                    <button
                      type="button"
                      onClick={editHandler}
                      value={JSON.stringify(obj)}
                      className={Styles.edit_button}>
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={deleteFunc}
                      value={obj.id}
                      className={Styles.delete_button}>
                      Delete
                    </button>
                  </div>
                </li>
              ),
          )
        )}
        {err && <p>Error: {err}</p>}
      </ul>
    </div>
  );
};

export default ContactList;
