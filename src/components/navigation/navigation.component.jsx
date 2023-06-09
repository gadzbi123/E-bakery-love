import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchSvg } from "../../assets/search.svg";
import "./navigation.styles.css";
const Navigation = () => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);
  return (
    <div className="flex justify-around gap-4 h-56 items-center text-navy-dark-20">
      <div
        className={`flex transition-all duration-200 ${
          isFocused
            ? "navigation-input-box-shadow-active"
            : "navigation-input-box-shadow"
        }`}>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Szukaj Ciast"
          className=" inline-block bg-transparent placeholder:text-navy focus:outline-none"></input>
        <SearchSvg className="w-6 h-6 " />
      </div>
      <Link to="/" className="font-semibold font-serif text-5xl ">
        E Bakery Love
      </Link>
      <div className="flex space-x-5 justify-between">
        <Link to="moje-ciasto">Stwórz swoje ciasto</Link>
        <Link to="galeria">Galeria</Link>
        <Link to="kontakt">Kontakt</Link>
      </div>
    </div>
  );
};
// `isFocused ? "border-b-2 border-navy" : "border-b border-navy"}`
export default Navigation;
