import ChooseCakeInput from "./ChooseCakeInput";
const ChooseCakeWarstwyKremu = () => {
  return (
    <div className=" mt-16">
      <h3 className="text-center text-3xl">Warstwy Kremu</h3>
      <div className="flex gap-10 justify-center items-center justify-items-center mt-8 bg">
        <ChooseCakeInput
          id="2warstwy"
          name="WarstwyKremu"
          label="2 warstwy"
          peerRoot="peer/2warstwy"
          peerLabel="peer-checked/2warstwy:text-amber-900"
          peerBackground="peer-checked/2warstwy:bg-amber-900"
          inputBackground="checked:bg-amber-900"
          peerBorder="peer-checked/2warstwy:border-[1px]"
        />
        <ChooseCakeInput
          id="3warstwy"
          name="WarstwyKremu"
          label="3 warstwy"
          peerRoot="peer/3warstwy"
          peerLabel="peer-checked/3warstwy:text-brown-dark-10"
          peerBackground="peer-checked/3warstwy:bg-brown-dark-10"
          inputBackground="checked:bg-brown-dark-10"
          peerBorder="peer-checked/3warstwy:border-[1px]"
        />
      </div>
    </div>
  );
};
export default ChooseCakeWarstwyKremu;
