import { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SearchSvg from "../../assets/search.svg";
import { GallerySearchContext } from "../../contexts/gallerySearch.context";
import { currentUserSelector } from "../../store/user/userStore.selector";
import { signInWithFacebookPopup, signOutUser } from "../../utils/firebase";

const Navigation = () => {
  const navigate = useNavigate();
  const onFocus = () => {
    navigate("/galeria");
  };

  const searchBoxRef = useRef<HTMLInputElement>(null);
  const handleSearchIconClick = () => {
    const searchBox = searchBoxRef.current as HTMLInputElement;
    searchBox.focus();
  };

  const { onSearchChange, resetSearch } = useContext(GallerySearchContext);
  const searchReset = () => {
    const searchBox = searchBoxRef.current as HTMLInputElement;
    searchBox.value = "";
    resetSearch();
  };

  const currentUser = useSelector(currentUserSelector);

  return (
    <div className="flex justify-around gap-4 h-56 items-center text-navy-dark-20 bg-yellow-light-20">
      <div
        className={`flex justify-center transition-all duration-200 w-[33%]`}>
        <input
          ref={searchBoxRef}
          onFocus={onFocus}
          placeholder="Szukaj Ciast"
          onChange={(e) => onSearchChange(e)}
          className=" inline-block bg-transparent placeholder:text-navy focus:outline-none"></input>
        <img
          src={SearchSvg}
          className="w-6 h-6 -ml-6 "
          onClick={handleSearchIconClick}
        />
      </div>
      <Link
        to="/"
        className="font-semibold font-serif text-5xl w-[33%] text-center">
        E Bakery Love
      </Link>
      <div className="flex space-x-5 justify-around w-[33%] ">
        <Link to="moje-ciasto">Stwórz swoje ciasto</Link>
        <Link to="galeria" onClick={searchReset}>
          Galeria
        </Link>
        <Link to="kontakt">Kontakt</Link>
        {!currentUser ? (
          <button onClick={signInWithFacebookPopup}>Zaloguj</button>
        ) : (
          <button onClick={signOutUser}>Wyloguj</button>
        )}
      </div>
    </div>
  );
};
// `isFocused ? "border-b-2 border-navy" : "border-b border-navy"}`
export default Navigation;
