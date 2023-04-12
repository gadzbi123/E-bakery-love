import ChooseCakeInput from "./ChooseCakeInput";
const ChooseCakeBiszkopt = () => {
  return (
    <div className=" mt-16">
      <h3 className="text-center text-3xl">Kolor biszkoptu</h3>
      <div className="flex gap-10 justify-center items-center justify-items-center mt-8">
        <ChooseCakeInput
          id="bialy"
          name="KolorBiszkoptu"
          label="Biały"
          peerRoot="peer/bialy"
          peerLabel="peer-checked/bialy:text-yellow-light-30"
          peerBackground="peer-checked/bialy:bg-yellow-light-20"
          inputBackground="checked:bg-yellow-light-20"
          peerBorder="peer-checked/bialy:border-[1px]"
        />
        <ChooseCakeInput
          id="kakaowy"
          name="KolorBiszkoptu"
          label="Kakaowy"
          peerRoot="peer/kakaowy"
          peerLabel="peer-checked/kakaowy:text-brown-dark-30"
          peerBackground="peer-checked/kakaowy:bg-brown-dark-30"
          inputBackground="checked:bg-brown-dark-30"
          peerBorder="peer-checked/kakaowy:border-[1px]"
        />
        <ChooseCakeInput
          id="szpinakowy"
          name="KolorBiszkoptu"
          label="Szpinakowy"
          peerRoot="peer/szpinakowy"
          peerLabel="peer-checked/szpinakowy:text-green-700"
          peerBackground="peer-checked/szpinakowy:bg-green-700"
          inputBackground="checked:bg-green-700"
          peerBorder="peer-checked/szpinakowy:border-[1px]"
        />
      </div>
    </div>
  );
};
export default ChooseCakeBiszkopt;
