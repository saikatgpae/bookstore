import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './rdux/configureStore';
import Books from './components/Books/Books';
import './App.css';
import AddNewBook from './components/AddNewBook/AddNewBook';
import Navbar from './components/Navber/Navber';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <AddNewBook />
      </div>
    </Provider>
  );
}

export default App;
