import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [{
  title: 'The Hunger Games',
  author: 'Suzzane Collins',
  categeory: 'Action',
  id: uuidv4(),
},
{
  title: 'Dune',
  author: 'Frank Herbert',
  categeory: 'Science Fiction',
  id: uuidv4(),
},
{
  title: 'Capital',
  author: 'Suzzane Collins',
  categeory: 'Economy',
  id: uuidv4(),
}];

export default function reduceBook(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state, {
        id: uuidv4(),
        title: action.title,
        author: action.author,
        categeory: action.categeory,
        completed: false,
      },
    ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}

export const addNewBook = (book) => ({
  type: ADD_BOOK,
  id: uuidv4(),
  title: book.title,
  author: book.author,
  categeory: book.categeory,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
