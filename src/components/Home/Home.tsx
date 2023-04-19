import { db } from "../../db";
const Home = () => {
  return (
    <div className="w-[50vw] h-[20vw] bg-red-500 flex items-center overflow-hidden">
      <img className="w-full h-auto " alt="" src={db[0].imageUrl} />
    </div>
  );
};
export default Home;
