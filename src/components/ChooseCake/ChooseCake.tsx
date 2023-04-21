import { useState } from "react";
import { Button } from "../Button/Button";
import ChooseCakeBiszkopt from "./ChooseCakeBiszkopt";
import ChooseCakeDate from "./ChooseCakeDate";
import ChooseCakeDodatek from "./ChooseCakeDodatek";
import ChooseCakeKrem from "./ChooseCakeKrem";
import ChooseCakeMotyw from "./ChooseCakeMotyw";
import ChooseCakeSrednica from "./ChooseCakeSrednica";
import ChooseCakeTynk from "./ChooseCakeTynk";
import ChooseCakeWarstwyKremu from "./ChooseCakeWarstwyKremu";
import ChooseCakeZamow from "./ChooseCakeZamow";

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
        <ChooseCakeDate />
        <Button>Zamów</Button>
        <ChooseCakeZamow classNames="hidden" />
      </form>
    </div>
  );
};
export default ChooseCake;
