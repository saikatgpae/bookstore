import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import './Books.css';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul className="book-information">
        {books.map((book) => (
          <li key={book.item_id} className="book" style={{ listStyleType: 'none' }}>
            <Book
              category={book.category}
              title={book.title}
              author={book.author}
              itemId={book.item_id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
