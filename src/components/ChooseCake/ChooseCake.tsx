import { useState } from "react";
import { Button } from "../Button/Button";
import ChooseCakeBiszkopt from "./ChooseCakeBiszkopt";
import ChooseCakeData from "./ChooseCakeData";
import ChooseCakeDodatek from "./ChooseCakeDodatek";
import ChooseCakeKrem from "./ChooseCakeKrem";
import ChooseCakeMotyw from "./ChooseCakeMotyw";
import ChooseCakeSrednica from "./ChooseCakeSrednica";
import ChooseCakeTynk from "./ChooseCakeTynk";
import ChooseCakeWarstwyKremu from "./ChooseCakeWarstwyKremu";
import ChooseCakeZamow from "./ChooseCakeZamow";
type Choices = {
  srednica: string;
  biszkopt: string;
  warstwyKremu: string;
  krem: string;
  dodatek: string;
  tynk: string;
  motyw: string;
  data: string;
};

const Initial_Choices: Choices = {
  srednica: "",
  biszkopt: "",
  warstwyKremu: "",
  krem: "",
  dodatek: "",
  tynk: "",
  motyw: "",
  data: "",
};

const ChooseCake = () => {
  const choices = useState({});
  return (
    <div className="mt-36 pb-10">
      <h2 className="text-5xl text-center font-semibold">
        Wybierz swoje ciasto
      </h2>
      <form>
        <ChooseCakeSrednica />
        <ChooseCakeBiszkopt />
        <ChooseCakeWarstwyKremu />
        <ChooseCakeKrem />
        <ChooseCakeDodatek />
        <ChooseCakeTynk />
        <ChooseCakeMotyw />
        <ChooseCakeData />
        <ChooseCakeZamow />
        <Button></Button>
      </form>
    </div>
  );
};
export default ChooseCake;
