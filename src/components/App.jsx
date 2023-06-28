import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {


  // const [contacts, setContacts] = useState(() => {
  //   const contactsList = JSON.parse(localStorage.getItem(lokalStorageKey));
  //   return contactsList && contactsList.length ? contactsList : '';
  // });

  // useEffect(() => {
  //   const contactsList = JSON.parse(localStorage.getItem(lokalStorageKey));

  // }, []);
  


  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    </>
  );
};
