import './AddNewBook.css';

function AddNewBook() {
  return (
    <div>
      <h3>Add new book</h3>
      <form className="add-new-form">
        <input className="book-title" type="text" id="title" placeholder="Book title" />
        <select className="categeory-selection-menu">
          <option value="action">Categeory</option>
        </select>
        <input className="add-new-book-buttoon" type="submit" value="Add Book" />
      </form>
    </div>
  );
}

export default AddNewBook;
