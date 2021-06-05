import React, { useEffect, useState } from "react";
import Book from "./components/Book/Book";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BookType } from "./types/Book";


function App() {
  const [books, setBooks] = useState<BookType[]>([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await await (await fetch("/api/v1/books")).json();
      setBooks(data);
    };
    fetchBooks();
  }, []);
  console.log({ books });
  console.log("yeahhhh");

  return (
    <div className="App">
      <Header />
      <main>
        <h1>List books</h1>
        {books.map((book) => (
          <Book book={book} key={book._id} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
