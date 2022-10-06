import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reduceBook from './books/books';
import reduceCategories from './categories/categories';

const rootReducer = combineReducers({
  books: reduceBook,
  categories: reduceCategories,
});
const store = configureStore({ reducer: rootReducer });

export default store;
