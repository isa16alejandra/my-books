import React, { useContext, useState } from 'react';

import {} from 'react-icons/hi';
import BookCard from '../componets/bookCard';
import MoreInfoModal from '../componets/moreInfoModal';
import { FetchContext } from '../context/fetchContext';
import { Book } from '../utils/types';

function AllBooks() {
  const [openInfo, setOpenInfo] = useState(false);
  const [book, setBook] = useState<Book>();
  const { books, removeBook } = useContext(FetchContext);

  const handleOpenInfo = (index: number) => {
    setBook(books[index]);
    setOpenInfo(true);
  };

  const handleDelete = (id: string) => {
    removeBook(id);
  };

  return (
    <main className="flex-grow" id="all-books">
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">
              This are all your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
                books
              </span>
            </h1>

            {/*BOOKS CONTAINER  */}
            <div className="py-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 h-auto">
                {books.map((item, index) => (
                  <BookCard book={item} index={index} handleOpenInfo={handleOpenInfo} />
                ))}
              </div>
            </div>

            {openInfo && (
              <MoreInfoModal book={book!} setOpenInfo={setOpenInfo} handleDelete={handleDelete} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AllBooks;
