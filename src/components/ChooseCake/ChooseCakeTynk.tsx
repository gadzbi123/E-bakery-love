import { ChangeEvent, useEffect } from "react";
import { Color, ColorPicker, toColor, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTynk } from "../../store/cakeOrder/cakeOrder.reducer";
import { selectTynk } from "../../store/cakeOrder/cakeOrder.selector";
import ChooseCakeInput from "./ChooseCakeInput";

const ChooseCakeTynk = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useColor("hex", "#e0d");
  const selectedTynk = useSelector(selectTynk);

  const setLocalColor = (color: Color) => {
    if (color.hex !== selectedTynk) {
      dispatch(updateTynk(color.hex));
    }
  };

  useEffect(() => {
    if (color.hex !== selectedTynk) {
      setColor(toColor("hex", selectedTynk) as Color);
    }
  }, [selectedTynk]);

  return (
    <div className=" mt-16">
      <h3 className="text-center text-3xl">Kolor Tynku</h3>
      <div className="flex gap-10 justify-center items-center justify-items-center mt-8">
        <ColorPicker
          width={500}
          height={200}
          color={color}
          onChange={(e) => setLocalColor(e)}
          hideHEX
          hideHSV
          //   hideRGB
          dark
        />
      </div>
    </div>
  );
};
export default ChooseCakeTynk;
