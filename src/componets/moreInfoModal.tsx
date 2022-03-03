import React from 'react';
import {
  HiOutlineAnnotation,
  HiOutlineBookmark,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineChevronDoubleDown,
  HiOutlineLightBulb,
  HiOutlineStar,
  HiOutlineUser,
} from 'react-icons/hi';
import { Book } from '../utils/types';
import InputText from './inputs/inputText';
import InputTextArea from './inputs/inputTextArea';
import Rating from './raiting';

type Props = {
  book: Book;
  setOpenInfo: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: (id: string) => void;
};
function MoreInfoModal(props: Props) {
  const { book, setOpenInfo, handleDelete } = props;
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed flex top-8 z-50 justify-center md:inset-0 h-modal sm:h-full">
      <div className="relative px-4 w-full h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => {
                setOpenInfo(false);
              }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 pt-0 text-center">
            <div className="flex justify-center my-8">
              <img src={book.cover} className="max-w-xs" />
            </div>

            <form className="grid sm:grid-cols-2 gap-8">
              {/* BOOK INFO*/}
              <div className="flex flex-col gap-8">
                {/* BOOK TITLE */}
                <InputText
                  labelText={
                    <div className="flex items-center justify-center mb-4 gap-2">
                      <HiOutlineBookOpen className="w-6 h-6" color="#D946EF " />
                      <span className="text-base font-semibold italic">Book title</span>
                    </div>
                  }
                  placeholder="Scythe"
                  id="title"
                  value={book.title}
                  noChange
                />
                {/* BOOK AUTHOR */}
                <InputText
                  labelText={
                    <div className="flex items-center justify-center mb-4 gap-2">
                      <HiOutlineUser className="w-6 h-6" color="#D946EF " />
                      <span className="text-base font-semibold italic">Author</span>
                    </div>
                  }
                  placeholder="Neal Shusterman"
                  id="author"
                  value={book.author}
                  noChange
                />
                {/* BOOK REVIEW */}
                <InputTextArea
                  labelText={
                    <div className="flex items-center justify-center mb-4 gap-2">
                      <HiOutlineAnnotation className="w-6 h-6" color="#D946EF " />
                      <span className="text-base font-semibold italic">My review</span>
                    </div>
                  }
                  placeholder="It is you time to write everything about this books"
                  value={book.review}
                  rows={10}
                  noChange
                />
                {/* BOOK QUOTES */}
                <InputTextArea
                  labelText={
                    <div className="flex items-center justify-center mb-4 gap-2">
                      <HiOutlineBookmark className="w-6 h-6" color="#D946EF " />
                      <span className="text-base font-semibold italic">My favorite quotes</span>
                    </div>
                  }
                  placeholder="Add all this quotes you want to remember"
                  value={book.quotes}
                  rows={5}
                  noChange
                />
              </div>

              <div className="flex flex-col gap-8 ">
                {/* DATES */}
                <div>
                  <div className="flex items-center justify-center flex-col mb-4">
                    <HiOutlineCalendar className="w-8 h-8" color="#D946EF " />
                    <span className="text-lg font-semibold italic">Dates</span>
                  </div>
                  <div className="flex justify-center flex-wrap gap-4 bg-gray-50 p-4 rounded-xl">
                    <InputText
                      labelText="Started"
                      id="started"
                      value={book.started}
                      type="date"
                      noChange
                    />
                    <InputText
                      labelText="Finished"
                      id="finished"
                      value={book.finished}
                      type="date"
                      noChange
                    />
                  </div>
                </div>
                {/* INSPIRATION */}
                <div>
                  <div className="flex items-center justify-center flex-col mb-4">
                    <HiOutlineLightBulb className="w-8 h-8" color="#D946EF " />
                    <span className="text-lg font-semibold italic">Inspiration Tree</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl flex flex-col items-center gap-4 px-12">
                    <InputText labelText="Why I read it?" value={book.why} noChange />
                    <HiOutlineChevronDoubleDown className="w-4 h-4" color="#9CA3AF" />
                    <InputText
                      labelText="It inspired me to (read/learn/visit)"
                      value={book.inspired}
                      noChange
                    />
                    <HiOutlineChevronDoubleDown className="w-4 h-4" color="#9CA3AF" />
                    <InputText labelText="Who will I recomend it to?" value={book.who} noChange />
                  </div>
                </div>
                {/* RATING */}
                <div>
                  <div className="flex items-center justify-center flex-col mb-4">
                    <HiOutlineStar className="w-8 h-8" color="#D946EF " />
                    <span className="text-lg font-semibold italic">Rating</span>
                  </div>
                  <div className="flex flex-col justify-center flex-wrap gap-4 bg-gray-50 p-4 rounded-xl">
                    <div>
                      <p className="text-base font-thin italic">Plot:</p>
                      <Rating rating={book.plot} />
                    </div>
                    <div>
                      <p className="text-base font-thin italic">Characters:</p>
                      <Rating rating={book.characters} />
                    </div>
                    <div>
                      <p className="text-base font-thin italic">Ease of reading:</p>
                      <Rating rating={book.ease} />
                    </div>
                    <div>
                      <p className="text-lg font-bold italic">Overall:</p>
                      <Rating isEmoji={true} rating={book.overal} />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <button
              onClick={() => {
                handleDelete(book.id!);
              }}
              className="p-4 m-8 btn text-white bg-black hover:bg-black w-80 rounded"
            >
              Delete this book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoModal;
