// import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const ADD_BOOK = 'bookstore/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
export const FETCH_BOOK = 'FETCH_BOOK';

const initialState = [];
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sKNpRc0IVeG7xRIpiN7S/books';

export const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const fetchAllBookThunk = createAsyncThunk(FETCH_BOOK, (action) => {
  const dispatch = action;
  fetch(API).then((response) => response.json()).then((data) => {
    const books = Object.keys(data).map((key) => {
      const book = data[key][0];
      return {
        item_id: key,
        ...book,
      };
    });
    dispatch({
      type: FETCH_BOOK,
      payload: books,
    });
  });
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBookThunk = createAsyncThunk(ADD_BOOK, (action) => (async () => {
  const { payload, dispatch } = action;
  await fetch(API, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  });
  dispatch(addBook(payload));
})());

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, (action) => (async () => {
  const { payload, dispatch } = action;
  await fetch(`${API}/${payload.item_id}`, {
    method: 'DELETE',
  });
  dispatch(removeBook(payload));
})());

export default function reduceBook(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      action.payload,
    ];

    case FETCH_BOOK:
      return [
        ...state,
        ...action.payload,
      ];

    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload.item_id),
      ];
    default: return state;
  }
}
