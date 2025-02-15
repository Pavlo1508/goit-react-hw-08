import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import ContactItem from "../Contact/Contact";
import s from "./ContactList.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.wrapper}>
      <ul>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} {...contact} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
