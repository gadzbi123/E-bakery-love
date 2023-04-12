import ChooseCakeInput from "./ChooseCakeInput";
const ChooseCakeKrem = () => {
  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl">Krem</h3>
      <div className="flex gap-12 justify-center items-center justify-items-center mt-8">
        <ChooseCakeInput
          id="bialaCzekolada"
          name="Krem"
          label="Biała Czekolada"
          peerRoot="peer/bialaCzekolada"
          peerLabel="peer-checked/bialaCzekolada:text-yellow-light-30"
          peerBackground="peer-checked/bialaCzekolada:bg-yellow-light-20"
          inputBackground="checked:bg-yellow-light-20"
          peerBorder="peer-checked/bialaCzekolada:border-[1px]"
        />
        <ChooseCakeInput
          id="czekolada"
          name="Krem"
          label="Czekolada"
          peerRoot="peer/czekolada"
          peerLabel="peer-checked/czekolada:text-brown-dark-30"
          peerBackground="peer-checked/czekolada:bg-brown-dark-30"
          inputBackground="checked:bg-brown-dark-30"
          peerBorder="peer-checked/czekolada:border-[1px]"
        />
        <ChooseCakeInput
          id="borowkowy"
          name="Krem"
          label="Borówkowy"
          peerRoot="peer/borowkowy"
          peerLabel="peer-checked/borowkowy:text-indigo-900"
          peerBackground="peer-checked/borowkowy:bg-indigo-900"
          inputBackground="checked:bg-indigo-900"
          peerBorder="peer-checked/borowkowy:border-[1px]"
        />
        <ChooseCakeInput
          id="malinowy"
          name="Krem"
          label="Malinowy"
          peerRoot="peer/malinowy"
          peerLabel="peer-checked/malinowy:text-pink-800"
          peerBackground="peer-checked/malinowy:bg-pink-800"
          inputBackground="checked:bg-pink-800"
          peerBorder="peer-checked/malinowy:border-[1px]"
        />
      </div>
    </div>
  );
};
export default ChooseCakeKrem;
