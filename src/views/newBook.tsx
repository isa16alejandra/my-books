import React, { useContext, useRef, useState } from 'react';
import {
  HiOutlineAnnotation,
  HiOutlineBookmark,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineChevronDoubleDown,
  HiOutlineLightBulb,
  HiOutlinePhotograph,
  HiOutlineStar,
  HiOutlineUser,
} from 'react-icons/hi';

import InputText from '../componets/inputs/inputText';
import InputTextArea from '../componets/inputs/inputTextArea';
import Rating from '../componets/raiting';
import { FetchContext } from '../context/fetchContext';
import { INITIAL_RATING } from '../utils/constanst';

function NewBook() {
  const { submitBook } = useContext(FetchContext);
  const [plot, setPlot] = useState(INITIAL_RATING);
  const [characters, setCharacters] = useState(INITIAL_RATING);
  const [ease, setEase] = useState(INITIAL_RATING);
  const [overal, setOveral] = useState(INITIAL_RATING);
  const [cover, setCover] = useState('');

  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const reviewRef = useRef(null);
  const quotesRef = useRef(null);
  const startedRef = useRef(null);
  const finishedRef = useRef(null);
  const whyRef = useRef(null);
  const inspiredRef = useRef(null);
  const whoRef = useRef(null);

  const getValue = (ref: any) => ref.current.value;

  const handleCover = (event: any) => {
    setCover(event.target.value);
  };
  const handleSubmit = () => {
    const newBook = {
      title: getValue(titleRef),
      author: getValue(authorRef),
      review: getValue(reviewRef),
      quotes: getValue(quotesRef),
      started: getValue(startedRef),
      finished: getValue(finishedRef),
      why: getValue(whyRef),
      inspired: getValue(inspiredRef),
      who: getValue(whoRef),
      cover: cover,
      plot: plot,
      characters: characters,
      ease: ease,
      overal: overal,
    };
    submitBook(newBook);
  };
  return (
    <main className="flex-grow" id="new-book">
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4">
              Is time to write about an amazing{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
                book
              </span>
            </h1>

            <div className="py-12">
              <div className="mt-8">
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
                      newRef={titleRef}
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
                      newRef={authorRef}
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
                      newRef={reviewRef}
                      rows={10}
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
                      newRef={quotesRef}
                      rows={5}
                    />
                    {/* BOOK COVER */}
                    <div>
                      <InputText
                        labelText={
                          <div className="flex items-center justify-center mb-4 gap-2">
                            <HiOutlinePhotograph className="w-6 h-6" color="#D946EF " />
                            <span className="text-base font-semibold italic">Book cover</span>
                          </div>
                        }
                        placeholder="Add a link to the book cover"
                        onChange={handleCover}
                        value={cover}
                      />
                      {cover && (
                        <img
                          src={cover}
                          alt="There is no cover"
                          className="rounded my-12 mx-auto"
                        />
                      )}
                    </div>
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
                          newRef={startedRef}
                          type="date"
                        />
                        <InputText
                          labelText="Finished"
                          id="finished"
                          newRef={finishedRef}
                          type="date"
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
                        <InputText labelText="Why I read it?" newRef={whyRef} />
                        <HiOutlineChevronDoubleDown className="w-4 h-4" color="#9CA3AF" />
                        <InputText
                          labelText="It inspired me to (read/learn/visit)"
                          newRef={inspiredRef}
                        />
                        <HiOutlineChevronDoubleDown className="w-4 h-4" color="#9CA3AF" />
                        <InputText labelText="Who will I recomend it to?" newRef={whoRef} />
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
                          <Rating rating={plot} setRating={setPlot} />
                        </div>
                        <div>
                          <p className="text-base font-thin italic">Characters:</p>
                          <Rating rating={characters} setRating={setCharacters} />
                        </div>
                        <div>
                          <p className="text-base font-thin italic">Ease of reading:</p>
                          <Rating rating={ease} setRating={setEase} />
                        </div>
                        <div>
                          <p className="text-lg font-bold italic">Overall:</p>
                          <Rating isEmoji={true} rating={overal} setRating={setOveral} />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="p-4 m-8 btn text-white bg-purple-400 hover:bg-purple-500 w-full rounded"
                  >
                    Add new book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NewBook;
