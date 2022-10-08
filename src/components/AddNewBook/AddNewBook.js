import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookThunk } from '../../rdux/books/books';
import './AddNewBook.css';

function AddNewBook() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategeory] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBookThunk({ payload: book, dispatch }));
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#categeory').value = 'categeory';
  };

  return (
    <div>
      <h3>Add new book</h3>
      <form className="add-new-form">
        <input className="book-title" type="text" id="title" placeholder="Book title" required onChange={(e) => { setTitle(e.target.value); }} />
        <input className="author-input" type="text" id="author" placeholder="Author" required onChange={(e) => { setAuthor(e.target.value); }} />
        <select className="categeory-selection-menu" id="categeory" onChange={(e) => { setCategeory(e.target.value); }}>
          <option value="categeory">Categeory</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Economy">Economy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <input className="add-new-book-buttoon" type="submit" value="Add Book" onClick={handleClick} />
      </form>
    </div>
  );
}

export default AddNewBook;
