import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {

    const fetch = async () => {
      const { data } = await axios.get('/api/v1/books')
      setBooks(data)
    }
    fetch()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {books?.map(book => (
          <article key={book._id}><h1>{book.title}</h1><p>{book.description}</p></article>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
