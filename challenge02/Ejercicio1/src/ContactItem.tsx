interface Props {
  id: number;
  name: string;
  phone: string;
  onDelete: (id: number) => void;
}

function ContactItem({ id, name, phone, onDelete }: Props) {

  const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    console.log(evt);
    onDelete(id);
  };

  return (
    <li>
      {name} - {phone}
      <button onClick={handleClick}>
        Eliminar
      </button>
    </li>
  );
}

export default ContactItem;