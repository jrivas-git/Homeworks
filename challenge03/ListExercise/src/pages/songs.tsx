import { useState, useRef } from "react";
import { LinkedList } from "../lists/LinkedList";

export default function Songs() {
  const listRef = useRef(new LinkedList<string>());

  if (!listRef.current.head) {
    listRef.current.append("Song 1");
    listRef.current.append("Song 2");
    listRef.current.append("Song 3");
  }

  const [song, setSong] = useState(listRef.current.getCurrent());

  const handleNext = () => {
    listRef.current.next();
    setSong(listRef.current.getCurrent());
  };

  return (
    <div>
      <h2>Playlist</h2>
      <p>Now playing: {song}</p>
      <button onClick={handleNext}>Next Song</button>
    </div>
  );
}