import ContactItem from "./ContactItem";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface Props {
  contacts: Contact[];
  onDelete: (id: number) => void;
}

function ContactList({ contacts, onDelete }: Props) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;