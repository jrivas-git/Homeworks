import { useState, useEffect } from "react";
import Queue from "../Queue/PeopleQueue";

type Person = {
  name: string;
  amount: number;
  date: string;
};

export default function ATM() {
  const [queue] = useState(() => {
    const q = new Queue<Person>();

    q.enqueue({
      name: "Juan",
      amount: 100,
      date: new Date().toLocaleString(),
    });

    q.enqueue({
      name: "Maria",
      amount: 200,
      date: new Date().toLocaleString(),
    });

    return q;
  });

  const [people, setPeople] = useState<Person[]>(queue.getAll());

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    console.log("Queue actualizada:", people);
  }, [people]);

  const addPerson = () => {
    if (!name || !amount) return;

    const newPerson: Person = {
      name,
      amount: Number(amount),
      date: new Date().toLocaleString(),
    };

    queue.enqueue(newPerson);
    setPeople(queue.getAll());

    setName("");
    setAmount("");
  };

  const attend = () => {
    queue.dequeue();
    setPeople(queue.getAll());
  };

  return (
    <div>
      <h1>ATM Queue</h1>

      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addPerson}>Add</button>
        <button onClick={attend}>Attend (Dequeue)</button>
      </div>

      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <strong>{person.name}</strong> - ${person.amount} <br />
            <small>{person.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}