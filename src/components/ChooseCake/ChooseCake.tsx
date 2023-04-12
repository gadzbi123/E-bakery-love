import ChooseCakeBiszkopt from "./ChooseCakeBiszkopt";
import ChooseCakeSrednica from "./ChooseCakeSrednica";

const ChooseCake = () => {
  return (
    <div className="mt-36">
      <h2 className="text-5xl text-center font-semibold">
        Wybierz swoje ciasto
      </h2>
      <ChooseCakeSrednica />
      <ChooseCakeBiszkopt />
    </div>
  );
};
export default ChooseCake;
