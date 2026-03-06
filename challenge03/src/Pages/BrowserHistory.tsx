import { useState } from "react";
import DoublyLinkedList from "../Lists/DoublyLinkedList";

export default function BrowserHistory() {
  const [list] = useState(() => {
    const history = new DoublyLinkedList<string>();
    history.append("Google");
    history.append("YouTube");
    history.append("GitHub");
    history.append("StackOverflow");
    return history;
  });

  const [current, setCurrent] = useState<string>(list.peek() as string);

  const next = () => {
    setCurrent(list.next() as string);
  };

  const prev = () => {
    setCurrent(list.prev() as string);
  };

  return (
    <div>
      <h1>Browser History</h1>
      <h2>{current}</h2>
      <button onClick={prev}>Back</button>
      <button onClick={next}>Forward</button>
    </div>
  );
}