import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { selectCakeOrder } from "../../store/cakeOrder/cakeOrderStore.selector";
import { Button, ButtonType } from "../Button/Button";
type ChooseCakePreviewProps = {
  openOrderModal: () => void;
  closePreviewModal: () => void;
  children?: React.ReactNode;
};

const ChooseCakePreview = (
  props: PropsWithChildren<ChooseCakePreviewProps>
) => {
  const cakeOrder = useSelector(selectCakeOrder);
  return (
    <div
      className={`absolute flex flex-col items-center h-full justify-evenly w-full bg-white animate-appearFromBottom rounded-lg`}>
      <h3 className="text-center text-4xl">Twoje zamówienie</h3>
      {Object.entries(cakeOrder).map((value, i) => {
        return (
          <p key={i} className="text-xl">
            {value[0] === "tynk" ? (
              <>
                {value[0]}:{" "}
                <span
                  className="w-8 h-8 inline-block rounded-full border border-black border-solid"
                  style={{ backgroundColor: cakeOrder.tynk }}>
                  &nbsp;
                </span>
              </>
            ) : (
              <>
                {value[0]
                  .split(/(?=[A-Z])/)
                  .join(" ")
                  .toLocaleLowerCase()}
                : {value[1]}
              </>
            )}
          </p>
        );
      })}
      <div className="flex gap-10">
        <Button
          buttonType={ButtonType.base}
          onClick={() => {
            props.closePreviewModal();
            props.openOrderModal();
          }}>
          Potwierdź
        </Button>
        <Button
          buttonType={ButtonType.important}
          onClick={() => props.closePreviewModal()}>
          Anuluj
        </Button>
      </div>
    </div>
  );
};

export default ChooseCakePreview;
