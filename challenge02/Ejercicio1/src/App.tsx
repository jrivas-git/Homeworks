import { useEffect, useState } from 'react';
import Loader from './Loader';
import ContactList from './ContactList';
import AddContact from './AddContact';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setContacts([
        { id: 1, name: 'Juan', phone: '3001111111' },
        { id: 2, name: 'Maria', phone: '3012222222' }
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <div>
      <h1>Lista de Contactos</h1>

      {loading ? (
        <Loader />
      ) : (
        <>
          <AddContact onAdd={addContact} />
          <ContactList contacts={contacts} onDelete={deleteContact} />
        </>
      )}
    </div>
  );
}

export default App;