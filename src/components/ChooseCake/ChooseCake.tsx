import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { selectIsValidCakeOrder } from "../../store/cakeOrder/cakeOrder.selector";
import { Button } from "../Button/Button";
import Modal from "../Modal/Modal";
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
  const [modalOpen, isModalOpen] = useState(false);
  const closeModal = () => isModalOpen(false);
  const validCakeOrder = useSelector(selectIsValidCakeOrder);
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validCakeOrder) {
      isModalOpen(true);
    }
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
      {modalOpen ? (
        <Modal handleCloseModal={closeModal}>
          <ChooseCakeZamow />
        </Modal>
      ) : null}
    </div>
  );
};
export default ChooseCake;
