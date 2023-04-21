import { FC } from "react";
import { PHONE_NUMBER } from "../../static/constants";
import { Button, ButtonType } from "../Button/Button";
import ChooseCakeInput from "./ChooseCakeInput";

type ChooseCakeZamowType = {
  classNames: string;
};
const ChooseCakeZamow: FC<ChooseCakeZamowType> = (
  children,
  classNames = "",
  ...props
) => {
  console.log(classNames);
  return (
    <div className={`mt-16 ${classNames}`}>
      <h3 className="text-center text-3xl">Zamówienie</h3>
      <div className="flex gap-6 justify-center items-center justify-items-center mt-8">
        <h2 className="text-2xl">Zamów przez telefon: {PHONE_NUMBER}</h2>
        <Button styleType={ButtonType.inverted}>
          Dodaj zamówienie do bazy
        </Button>
      </div>
    </div>
  );
};
export default ChooseCakeZamow;
