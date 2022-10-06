import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import './Books.css';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul className="book-information">
        {books.map((book) => (
          <li key={book.id} className="book" style={{ listStyleType: 'none' }}>
            <Book categeory={book.categeory} title={book.title} author={book.author} id={book.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
