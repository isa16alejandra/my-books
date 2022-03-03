import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
type Props = {
  children: React.ReactNode;
};

type Book = {
  title: string;
  author: string;
  review: string;
  quotes: string;
  started: Date;
  finished: Date;
  why: string;
  inspired: string;
  who: string;
  cover: string;
  plot: boolean[];
  characters: boolean[];
  ease: boolean[];
  overal: boolean[];
  id?: string;
};

type Context = {
  books: Book[];
  submitBook: (newBook: Book) => Promise<boolean>;
  removeBook: (id: string) => Promise<void>;
};
const initialContext: Context = {
  books: [],
  submitBook: async () => false,
  removeBook: async () => {
    return;
  },
};

const FetchContext = createContext<Context>(initialContext);

const FetchContextProvider = ({ children }: Props): JSX.Element => {
  const [books, setBooks] = useState<Book[]>(initialContext.books);

  const validateBeforeSubmit = (newBook: Book) => {
    let errorMessage = '';
    if (!newBook.title) {
      errorMessage = 'Title is required.';
    } else if (!newBook.author) {
      errorMessage = ' Author is required.';
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    return;
  };
  const submitBook = async (newBook: Book) => {
    try {
      validateBeforeSubmit(newBook);
      if (!newBook.cover) {
        newBook.cover =
          'https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg.webp';
      }
      toast.info('Wait...');
      await axios.post('https://my-projects-a4815-default-rtdb.firebaseio.com/books.json', newBook);
      toast('You add a new book');
      window.location.reload();
      return true;
    } catch (error: any) {
      toast(error.message, { type: 'error' });
      return false;
    }
  };
  const removeBook = async (id: string) => {
    try {
      toast.info('Wait...');
      await axios.delete(`https://my-projects-a4815-default-rtdb.firebaseio.com/books/${id}.json`);
      toast('You remove this book');
      window.location.reload();
      return;
    } catch (error: any) {
      toast(error.message, { type: 'error' });
      return;
    }
  };

  const getBooks = async () => {
    try {
      const { data } = await axios.get(
        'https://my-projects-a4815-default-rtdb.firebaseio.com/books.json',
      );

      const newArray = Object.keys(data).map(item => {
        return { ...data[item], id: item };
      });
      setBooks(newArray.reverse());
      return;
    } catch (error: any) {
      toast(error.message, { type: 'error' });
      return;
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <FetchContext.Provider value={{ books, submitBook, removeBook }}>
      <ToastContainer />
      {children}
    </FetchContext.Provider>
  );
};

export { FetchContext, FetchContextProvider };
