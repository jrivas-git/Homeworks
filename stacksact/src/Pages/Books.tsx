import { useState, useEffect } from "react";
import Stack from "../Stack/BookStack";

type Book = {
  name: string;
  isbn: string;
  author: string;
  editorial: string;
};

export default function Books() {
  const [stack] = useState(() => {
    const s = new Stack<Book>();

    s.push({
      name: "Book 1",
      isbn: "111",
      author: "Author A",
      editorial: "Editorial X",
    });

    s.push({
      name: "Book 2",
      isbn: "222",
      author: "Author B",
      editorial: "Editorial Y",
    });

    return s;
  });

  const [books, setBooks] = useState<Book[]>(stack.getAll());

  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");

  useEffect(() => {
    console.log("Stack actualizado:", books);
  }, [books]);

  const addBook = () => {
    if (!name || !isbn || !author || !editorial) return;

    const newBook: Book = { name, isbn, author, editorial };

    stack.push(newBook);
    setBooks(stack.getAll());

    setName("");
    setIsbn("");
    setAuthor("");
    setEditorial("");
  };

  return (
    <div>
      <h1>Books Stack</h1>

      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          placeholder="Editorial"
          value={editorial}
          onChange={(e) => setEditorial(e.target.value)}
        />

        <button onClick={addBook}>Add Book</button>
      </div>

      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.name}</strong> - {book.author} ({book.isbn}) [
            {book.editorial}]
          </li>
        ))}
      </ul>
    </div>
  );
}