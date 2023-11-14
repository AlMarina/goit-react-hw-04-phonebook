import { BtnDelete, ListItem } from './ContactList.syled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <BtnDelete type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </BtnDelete>
        </ListItem>
      ))}
    </ul>
  );
};
