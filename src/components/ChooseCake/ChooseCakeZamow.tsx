import { FC } from "react";
import { useDispatch } from "react-redux";
import { PHONE_NUMBER } from "../../static/constants";
import { resetCakeOrder } from "../../store/cakeOrder/cakeOrder.reducer";
import { Button, ButtonType } from "../Button/Button";

type ChooseCakeZamowType = {
  classNames?: string;
};
const ChooseCakeZamow: FC<ChooseCakeZamowType> = (
  children,
  classNames,
  ...props
) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`absolute flex flex-col items-center h-full justify-center gap-12 w-full`}>
      <h3 className="text-center text-4xl">Zamówienie</h3>
      <h4 className="text-2xl">
        Zamów przez telefon:
        <span className=" text-red-500">{PHONE_NUMBER}</span>
      </h4>
      <h5 className="text-lg">lub</h5>
      <Button
        styleType={ButtonType.inverted}
        onClick={() => dispatch(resetCakeOrder())}>
        Dodaj zamówienie do bazy
      </Button>
    </div>
  );
};
export default ChooseCakeZamow;
