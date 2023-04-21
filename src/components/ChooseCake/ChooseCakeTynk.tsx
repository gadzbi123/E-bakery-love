import { ChangeEvent } from "react";
import { Color, ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useDispatch } from "react-redux";
import { updateTynk } from "../../store/cakeOrder/cakeOrder.reducer";
import ChooseCakeInput from "./ChooseCakeInput";

const ChooseCakeTynk = () => {
  const dispatch = useDispatch();
  const handleChange = (c: Color) => {
    dispatch(updateTynk(c.hex));
  };
  const [color, setColor] = useColor("hex", "#e0d");
  return (
    <div className=" mt-16">
      <h3 className="text-center text-3xl">Kolor Tynku</h3>
      <div className="flex gap-10 justify-center items-center justify-items-center mt-8">
        <ColorPicker
          width={500}
          height={200}
          color={color}
          onChange={setColor}
          hideHEX
          hideHSV
          //   hideRGB
          dark
          onChangeComplete={handleChange}
        />
      </div>
    </div>
  );
};
export default ChooseCakeTynk;
