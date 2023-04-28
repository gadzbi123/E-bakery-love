import {
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { GallerySearchContext } from "../../contexts/gallerySearch.context";
import { CardProps, db } from "../../db";
type GalleryProps = {
  children?: ReactNode;
};

const Gallery = ({ children }: PropsWithChildren<GalleryProps>) => {
  const { searchField } = useContext(GallerySearchContext);
  const [filteredCards, setFilteredCards] = useState<CardProps[]>([]);

  useEffect(() => {
    const filtered = db.filter((card: CardProps) => {
      return (
        card.categories.join(" ").includes(searchField) ||
        card.title.toLowerCase().includes(searchField)
      );
    });
    setFilteredCards(filtered);
  }, [searchField, db]);
  return (
    <div className=" grid grid-cols-4 justify-items-center justify-center gap-y-6 mt-36 mx-12">
      {filteredCards.map((card) => {
        return (
          <div
            key={card.id}
            className="w-80 h-86 bg-slate-100 flex flex-col items-center justify-center overflow-hidden rounded-2xl">
            <div className="w-full h-[65%] flex items-center bg-slate-200 overflow-hidden py-2">
              <img src={card.imageUrl} alt="title" className="" />
            </div>
            <div className="h-[20%] flex justify-center items-center w-full">
              <h3 className="text-xl text-slate-600">{card.title}</h3>
            </div>
            <div className="h-[15%] flex justify-start items-center w-full">
              <h3 className="text-sm text-slate-600 px-3">
                Kategoria: {card.categories.join(", ")}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
