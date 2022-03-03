import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

import Footer from './componets/footer';
import Header from './componets/header';
import { FetchContextProvider } from './context/fetchContext';
import AllBooks from './views/allBooks';
import Home from './views/home';
import NewBook from './views/newBook';

import './App.css';

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
