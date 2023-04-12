import { DAYS_IN_FORWARD } from "../../static/constants";
import ChooseCakeInput from "./ChooseCakeInput";
const ChooseCakeData = () => {
  const calculateMinDate: () => string = () => {
    let today = new Date().valueOf();
    let minDate = new Date(today + DAYS_IN_FORWARD * 86_400_000);
    let minDateFormatted = `${minDate.getFullYear()}-${
      minDate.getMonth() + 1 < 10
        ? `0${minDate.getMonth() + 1}`
        : minDate.getMonth() + 1
    }-${minDate.getDate()}`;
    console.log(minDateFormatted);
    return minDateFormatted;
  };
  return (
    <div className="mt-16">
      <h3 className="text-center text-3xl">Data Uroczystości</h3>
      <div className="flex gap-6 justify-center items-center justify-items-center mt-8">
        <input type="date" min={calculateMinDate()} />
      </div>
    </div>
  );
};
export default ChooseCakeData;
