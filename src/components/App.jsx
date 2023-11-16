import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LSKEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LSKEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem(LSKEY, stringifiedContacts);
  }, [contacts]);

  const addContact = data => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };
    setContacts(prevState => [...prevState, newContact]);
  };

  const filterSearch = evt => {
    setFilter(evt.currentTarget.value.toLowerCase());
  };

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const contactOfFiltred = filterContact();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterSearch} />
      <ContactList contacts={contactOfFiltred} deleteContact={deleteContact} />
    </div>
  );
};
