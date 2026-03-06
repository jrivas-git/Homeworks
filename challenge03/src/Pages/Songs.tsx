import { useState } from "react";
import LinkedList from "../Lists/LinkedList";

export default function Songs() {
  const [songs] = useState(() => {
    const list = new LinkedList<string>();
    list.append("Song 1");
    list.append("Song 2");
    list.append("Song 3");
    list.append("Song 4");
    return list.print();
  });

  return (
    <div>
      <h1>Songs</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
}