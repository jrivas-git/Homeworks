import { useState, useRef } from "react";
import { DoubleLinkedList } from "../lists/DoubleLinkedList";

export default function BrowserHistory() {
  const historyRef = useRef(new DoubleLinkedList<string>());

  if (!historyRef.current.head) {
    historyRef.current.append("google.com");
    historyRef.current.append("github.com");
    historyRef.current.append("youtube.com");
  }

  const [page, setPage] = useState(historyRef.current.getCurrent());

  const next = () => {
    historyRef.current.next();
    setPage(historyRef.current.getCurrent());
  };

  const prev = () => {
    historyRef.current.prev();
    setPage(historyRef.current.getCurrent());
  };

  return (
    <div>
      <h2>Browser History</h2>
      <p>Current page: {page}</p>
      <button onClick={prev}>Back</button>
      <button onClick={next}>Forward</button>
    </div>
  );
}