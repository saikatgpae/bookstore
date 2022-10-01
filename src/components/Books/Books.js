import React, { useState } from 'react';
// import uuid from 'react-uuid';
import { v4 as uuidv4 } from 'uuid';
// import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';
import './Books.css';

function BookList() {
  const Books = [
    {
      title: 'The Hunger Games',
      author: 'Suzzane Collins',
      category: 'Action',
      id: uuidv4(),
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      id: uuidv4(),
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzzane Collins',
      category: 'Economy',
      id: uuidv4(),
    },
  ];
  const [books] = useState(Books);
  return (
    <div>
      <ul className="book-information">
        {books.map((book) => (
          <li key={book.id} className="book" style={{ listStyleType: 'none' }}>
            <Book category={book.category} title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
