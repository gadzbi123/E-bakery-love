import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PHONE_NUMBER } from "../../static/constants";
import { resetCakeOrder } from "../../store/cakeOrder/cakeOrder.reducer";
import { selectIsValidCakeOrder } from "../../store/cakeOrder/cakeOrder.selector";
import { Button, ButtonType } from "../Button/Button";
import Modal from "../Modal/Modal";
import ChooseCakeBiszkopt from "./ChooseCakeBiszkopt";
import ChooseCakeDate from "./ChooseCakeDate";
import ChooseCakeDodatek from "./ChooseCakeDodatek";
import ChooseCakeKrem from "./ChooseCakeKrem";
import ChooseCakeMotyw from "./ChooseCakeMotyw";
import ChooseCakeSrednica from "./ChooseCakeSrednica";
import ChooseCakeTynk from "./ChooseCakeTynk";
import ChooseCakeWarstwyKremu from "./ChooseCakeWarstwyKremu";

const ChooseCake = () => {
  const [modalOpen, isModalOpen] = useState(false);
  const closeModal = () => isModalOpen(false);
  const openModal = () => isModalOpen(true);
  const validCakeOrder = useSelector(selectIsValidCakeOrder);
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validCakeOrder) {
      isModalOpen(true);
    }
  };

  const dispatch = useDispatch();
  const addToDatabase = () => {
    dispatch(resetCakeOrder());
    closeModal();
  };
  return (
    <div className="mt-36 pb-10">
      <h2 className="text-5xl text-center font-semibold">
        Wybierz swoje ciasto
      </h2>
      <form onSubmit={onSubmitHandler}>
        <ChooseCakeSrednica />
        <ChooseCakeBiszkopt />
        <ChooseCakeWarstwyKremu />
        <ChooseCakeKrem />
        <ChooseCakeDodatek />
        <ChooseCakeTynk />
        <ChooseCakeMotyw />
        <ChooseCakeDate />
        <Button className="mt-16">Zamów</Button>
      </form>
      <Button
        buttonType={ButtonType.important}
        className="mt-16"
        onClick={openModal}>
        Open Modal
      </Button>
      {modalOpen ? (
        <Modal handleCloseModal={closeModal}>
          <div
            className={`absolute flex flex-col items-center h-full justify-center gap-12 w-full`}>
            <h3 className="text-center text-4xl">Zamówienie</h3>
            <h4 className="text-2xl">
              Zamów przez telefon:
              <span className=" text-red-500"> {PHONE_NUMBER}</span>
            </h4>
            <h5 className="text-lg">lub</h5>
            <Button buttonType={ButtonType.inverted} onClick={addToDatabase}>
              Dodaj zamówienie
            </Button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};
export default ChooseCake;
