import React from 'react';

function Home() {
  return (
    <main className="flex-grow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-36 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              A simple way to remember your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400">
                books
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <div className="mb-4">
                <p className="text-xl text-gray-600 italic">
                  When it rains look for rainbows, when it's dark look for stars.
                </p>
                <p className="text-xl text-gray-600 font-semibold">Oscar Wilde</p>
              </div>
              <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-0 pt-8">
                <div>
                  <a
                    className="p-4 m-8 btn text-white bg-purple-400 hover:bg-purple-500 w-full"
                    href="#new-book"
                  >
                    Add new book
                  </a>
                </div>
                <div>
                  <a
                    className="p-4 m-8 btn text-white bg-gray-900 hover:bg-gray-800 w-full "
                    href="#all-books"
                  >
                    See all your books
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
