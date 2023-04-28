import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchSvg from "../../assets/search.svg";
import {
  GallerySearchContext,
  GallerySearchProvider,
} from "../../contexts/gallerySearch.context";
import { useFocus } from "../../hooks/focus.hook";
const Navigation = () => {
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const onFocus = () => {
    navigate("/galeria");
    setIsFocused(true);
  };
  const onBlur = () => setIsFocused(false);
  const searchBoxRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    searchBoxRef.current?.focus();
  };
  const { onSearchChange, resetSearch } = useContext(GallerySearchContext);
  const onSearchReset = () => {
    if (searchBoxRef?.current) {
      searchBoxRef.current.value = "";
      resetSearch();
    }
  };
  return (
    <div className="flex justify-around gap-4 h-56 items-center text-navy-dark-20 bg-yellow-light-20">
      <div
        className={`flex justify-center transition-all duration-200 w-[33%]`}>
        <input
          ref={searchBoxRef}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Szukaj Ciast"
          onChange={(e) => onSearchChange(e)}
          className=" inline-block bg-transparent placeholder:text-navy focus:outline-none"></input>
        <img src={SearchSvg} className="w-6 h-6 -ml-6 " onClick={handleClick} />
      </div>
      <Link
        to="/"
        className="font-semibold font-serif text-5xl w-[33%] text-center">
        E Bakery Love
      </Link>
      <div className="flex space-x-5 justify-around w-[33%] ">
        <Link to="moje-ciasto">Stwórz swoje ciasto</Link>
        <Link to="galeria" onClick={onSearchReset}>
          Galeria
        </Link>
        <Link to="kontakt">Kontakt</Link>
      </div>
    </div>
  );
};
// `isFocused ? "border-b-2 border-navy" : "border-b border-navy"}`
export default Navigation;
