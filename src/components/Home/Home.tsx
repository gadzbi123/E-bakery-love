import { useNavigate } from "react-router-dom";
import { db } from "../../db";
import { Button } from "../Button/Button";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col mt-28 pb-14">
      <div className="w-[80vw] h-[30vw] flex items-center bg-gray-300 rounded-3xl overflow-hidden">
        <div className="w-[50%] h-[100%] gap-4 justify-around items-center flex flex-col p-5">
          <h2 className="text-6xl text-navy-dark-10">
            Każde ciasto dekorowane przez profesjonalistkę
          </h2>
          <h3 className="text-4xl text-navy-light-20 self-start">
            Stwórz swoje własne ciasto
          </h3>
          <Button onClick={() => navigate("/moje-ciasto")}>
            ZŁÓŻ ZAMÓWIENIE
          </Button>
        </div>
        <div className="overflow-hidden w-[50%] h-[100%]">
          <img
            className="w-full h-auto -translate-y-[10%] image-opacity-gradient "
            alt=""
            src={db[0].imageUrl}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
