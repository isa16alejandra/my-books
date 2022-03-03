import React from 'react';

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

type Props = {
  book: Book;
  handleOpenInfo: (index: number) => void;
  index: number;
};
function BookCard(props: Props) {
  const { book, handleOpenInfo, index } = props;
  return (
    <div className="h-screen flex items-center justify-center" key={index}>
      <div className="rounded-lg">
        <img src={book.cover} className="rounded-t-lg w-64 h-96" />
        <div className="bg-gray-50 text-center rounded-b-lg">
          <p className="text-gray-700 text-xl font-bold pt-6">{book.title}</p>

          <p className="text-gray-700 text-sm font-light pt-6">{book.review}</p>

          <button
            className="border-black border-2 px-3 rounded text-gray-700 font-semibold mt-6 mb-6"
            onClick={() => {
              handleOpenInfo(index);
            }}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
