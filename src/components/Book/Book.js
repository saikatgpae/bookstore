import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

function Book(props) {
  const { category, title, author } = props;
  return (
    <div className="book-detail">
      <div className="book-card">
        <h4 className="category">{category}</h4>
        <h2 className="title">{title}</h2>
        <h4 className="author">{author}</h4>
        <ul className="user">
          <li className="comments">Comments</li>
          <li className="remove">Remove</li>
          <li className="edit">Edit</li>
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
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
