import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../rdux/books/books';
import './Book.css';

function Book(props) {
  const {
    categeory, title, author, id,
  } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-detail">
      <div className="book-card">
        <h4 className="category">{categeory}</h4>
        <h2 className="title">{title}</h2>
        <h4 className="author">{author}</h4>
        <ul className="user">
          <li><button className="comments" type="submit">Comments</button></li>
          <li><button className="remove" type="submit" onClick={handleClick}>Remove</button></li>
          <li><button className="edit" type="submit">Edit</button></li>
        </ul>
      </div>
      <div>
        <div className="Rectangle-3">
          <span className="dot" />
        </div>
      </div>
      <div className="completed">
        <h5 className="completed-yet">100%</h5>
        <h5 className="completed">Completed</h5>
      </div>
      <div>
        <div className="chrapter">
          <h4 className="current-chapter">CURRENT CHRAPTER</h4>
          <h5 className="chapter-no">CURRENT 17</h5>
        </div>
        <button type="submit" className="update-button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}
// Book.defaultProps = {
//   categeory: 'Action',
// };

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categeory: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
