import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componets/header';
import Home from './views/home';
import NewBook from './views/newBook';
import { FetchContextProvider } from './context/fetchContext';
import 'react-toastify/dist/ReactToastify.css';
import AllBooks from './views/allBooks';
import Footer from './componets/footer';

function App() {
  return (
    <div className="App scroll-smooth">
      <FetchContextProvider>
        <Header />
        <div className="relative top-40 sm:top-28">
          <Home />
          <NewBook />
          <AllBooks />
        </div>
        <Footer />
      </FetchContextProvider>
    </div>
  );
}

export default App;
