import { PropsWithChildren, createContext, useState } from "react";

export const GallerySearchContext = createContext({
  searchField: "",
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  resetSearch: () => {},
});

export const GallerySearchProvider = ({ children }: PropsWithChildren) => {
  const [searchField, setSearchField] = useState("");
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value.toLocaleLowerCase());
  };
  const resetSearch = () => {
    setSearchField("");
  };
  const values = { searchField, onSearchChange, resetSearch };
  return (
    <GallerySearchContext.Provider value={values}>
      {children}
    </GallerySearchContext.Provider>
  );
};
