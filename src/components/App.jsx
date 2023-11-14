import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LSKEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsLs = localStorage.getItem(LSKEY);
    if (JSON.parse(contactsLs))
      this.setState({ contacts: JSON.parse(contactsLs) });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem(LSKEY, JSON.stringify(this.state.contacts));
  }

  addContact = data => {
    const { contacts } = this.state;

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
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterSearch = evt => {
    this.setState({
      filter: evt.currentTarget.value.toLowerCase(),
    });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const contactOfFiltred = this.filterContact();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterSearch} />
        <ContactList
          contacts={contactOfFiltred}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
