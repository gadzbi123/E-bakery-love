import ChooseCakeInput from "./ChooseCakeInput";
const ChooseCakeMotyw = () => {
  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl">Motyw</h3>
      <div className="flex gap-6 justify-center items-center justify-items-center mt-8">
        <ChooseCakeInput
          id="kremowy"
          name="Motyw"
          label="Kremowy"
          peerRoot="peer/kremowy"
          peerLabel="peer-checked/kremowy:text-yellow-light-30"
          peerBackground="peer-checked/kremowy:bg-yellow-light-20"
          inputBackground="checked:bg-yellow-light-20"
          peerBorder="peer-checked/kremowy:border-[1px]"
        />
        <ChooseCakeInput
          id="czekoladki"
          name="Motyw"
          label="Czekoladki"
          peerRoot="peer/czekoladki"
          peerLabel="peer-checked/czekoladki:text-brown-dark-30"
          peerBackground="peer-checked/czekoladki:bg-brown-dark-30"
          inputBackground="checked:bg-brown-dark-30"
          peerBorder="peer-checked/czekoladki:border-[1px]"
        />
        <ChooseCakeInput
          id="kwiaty"
          name="Motyw"
          label="Kwiaty"
          peerRoot="peer/kwiaty"
          peerLabel="peer-checked/kwiaty:text-rose-600"
          peerBackground="peer-checked/kwiaty:bg-rose-600"
          inputBackground="checked:bg-rose-600"
          peerBorder="peer-checked/kwiaty:border-[1px]"
        />
        <ChooseCakeInput
          id="owoceMotyw"
          name="Motyw"
          label="Owoce"
          peerRoot="peer/owoceMotyw"
          peerLabel="peer-checked/owoceMotyw:text-purple-700"
          peerBackground="peer-checked/owoceMotyw:bg-purple-700"
          inputBackground="checked:bg-purple-700"
          peerBorder="peer-checked/owoceMotyw:border-[1px]"
        />
        <input
          type="text"
          placeholder="Inny motyw"
          onFocus={(e) => {
            e.preventDefault();
          }}
          className="text-xl w-36 bg-transparent appearance-none placeholder:text-navy-dark-20 border transition-all border-navy-dark-20 rounded-md text-gray-700 leading-tight focus:outline-none focus:bg-yellow-light-20 focus:border-navy-dark-10 py-1 px-1"
        />
      </div>
    </div>
  );
};
export default ChooseCakeMotyw;
