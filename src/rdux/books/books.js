import { v4 as uuidv4 } from 'uuid';
// import { createAsyncThunk } from '@reduxjs/toolkit';

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

/* eslint-disable */





// const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CmLc1E6jW93Pz1s1S9eG/books';

// const FETCH_BOOK = 'FETCH_BOOK';
// export const fetchBook = (payload) => ({
//   type: FETCH_BOOK,
//   payload,
// });
// export const fetchBookThunk = createAsyncThunk(FETCH_BOOK, (action) => {
  // const dispatch = action;
  // fetch(API, {
  //   method: 'POST',
  //   body: JSON.stringify(
  //     {"item_id": uuidv4(), "title": "The Great Gatsby", "author": "John Smith", "category": "Fiction"}),
  //   headers: { 'Content-type': 'application/json; charset=UTF-8' },
  // }).then((response) => response.json());

  // const scores = async () => {
  //   const response = await fetch(API);
  //   const json = await response.json();
  //   // console.log(json)
  //   json.forEach((element) => {
  //     console.log(element)
  //   });
  // };
  // scores();

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
