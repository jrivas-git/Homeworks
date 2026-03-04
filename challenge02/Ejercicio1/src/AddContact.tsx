import { useState } from 'react';

interface Props {
  onAdd: (contact: { id: number; name: string; phone: string }) => void;
}

function AddContact({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    onAdd({
      id: Date.now(),
      name,
      phone
    });

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre"
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />

      <input
        placeholder="Teléfono"
        value={phone}
        onChange={(evt) => setPhone(evt.target.value)}
      />

      <button>Agregar</button>
    </form>
  );
}

export default AddContact;