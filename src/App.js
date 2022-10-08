import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Books from './components/Books/Books';
import './App.css';
import { fetchAllBookThunk } from './rdux/books/books';
import AddNewBook from './components/AddNewBook/AddNewBook';
import Navbar from './components/Navber/Navber';
import Categories from './components/Categories/Categories';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBookThunk(dispatch));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<AddNewBook />} /> */}
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <AddNewBook />
    </div>
  );
}

export default App;
