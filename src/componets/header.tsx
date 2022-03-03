import React, { useEffect,useState } from 'react';

import InputText from './inputs/inputText';

function Header() {
  const [search, setSearch] = useState('');

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const handleSearch = (event: any) => {
    // TODO do something with this value
    setSearch(event.target.value);
  };

  return (
    <nav
      className={`py-8 fixed w-full z-30  md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto gap-4">
        <a href="#" className="flex items-center">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-400 font-bold text-2xl">
            Books
          </div>
        </a>
        <div className="flex md:order-2">
          <div className="relative mr-3 md:mr-0 md:block">
            <InputText
              placeholder="Search books"
              value={search}
              onChange={handleSearch}
              id="search-book"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
