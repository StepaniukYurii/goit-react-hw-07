import { useState, useEffect, useRef } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";

const App = () => {
  // Початкові контакти
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const initialContactsRef = useRef(initialContacts);

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts =
      JSON.parse(localStorage.getItem("contacts")) ||
      initialContactsRef.current;
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts((prev) => [...prev, { id: nanoid(), name, number }]);
  };

  const removeContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={removeContact} />
    </div>
  );
};
export default App;
