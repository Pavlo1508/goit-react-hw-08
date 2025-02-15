import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

// eslint-disable-next-line react/prop-types
const Contacts = ({ isError }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector((state) => state.contacts.isLoading);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading contacts...</p>}
      {isError && <p>Error: {isError}</p>}
      <ContactList />
    </div>
  );
};

export default Contacts;
