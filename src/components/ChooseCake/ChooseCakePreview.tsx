import { useSelector } from "react-redux";
import { selectCakeOrder } from "../../store/cakeOrder/cakeOrder.selector";

const ChooseCakePreview = () => {
  //   {
  //     biszkopt: "szpinakowy";
  //     date: "2023-05-24";
  //     dodatek: "zelkowy";
  //     krem: "borowkowy";
  //     motyw: "czekoladkiMotyw";
  //     srednica: "24";
  //     tynk: "#f73fea";
  //     warstwyKremu: "3warstwy";
  //   }
  const cakeOrder = useSelector(selectCakeOrder);
  const getBiszkoptColor = () => {
    switch (cakeOrder.biszkopt) {
      case "bialy":
        return "bg-yellow-light-20";
      case "kakaowy":
        return "bg-brown-dark-30";
      case "szpinakowy":
        return "bg-green-700";
      default:
        return "";
    }
  };
  const getKremColor = () => {
    switch (cakeOrder.krem) {
      case "borowkowy":
        return "bg-blue-500";
      case "czekoladowy":
        return "bg-brown-dark-30";
      case "malinowy":
        return "bg-red-500";
      case "truskawkowy":
        return "bg-pink-500";
      case "waniliowy":
        return "bg-yellow-500";
      default:
        return "";
    }
  };

  return (
    <div className="w-[100%] h-[70%] flex justify-center items-center relative">
      <div
        className={`w-64 h-36 absolute ${getBiszkoptColor()} rounded-md z-[60]`}>
        <div
          // workaround for tailwindcss not supporting dynamic colors in className
          // may be fixed in future versions or with tailwind-safelist-generator
          style={{ backgroundColor: cakeOrder.tynk }}
          className={`w-32 h-[100%] scale-[1.01] rounded-md z-[70] absolute shadow-md`}>
          &nbsp;
        </div>
        <div
          style={{ backgroundColor: cakeOrder.tynk }}
          className={`w-[100%] h-[20%] rounded-[100%] z-[70] absolute top-0 left-0 -translate-y-[40%] shadow-sm`}>
          &nbsp;
        </div>
        {cakeOrder.warstwyKremu === "3warstwy" ? (
          <div
            className={`h-[5%] w-[100%] ${getKremColor()} absolute top-10 left-0 rounded-md`}>
            &nbsp;
          </div>
        ) : null}
        <div
          className={`h-[5%] w-[100%] ${getKremColor()} absolute top-18 left-0 rounded-md`}>
          &nbsp;
        </div>
        <div
          className={`h-[5%] w-[100%] ${getKremColor()} absolute top-28 left-0  rounded-md`}>
          &nbsp;
        </div>
      </div>
      <div
        className={` w-80 h-56 absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-[25%] bg-brown-dark-20 rounded-[50%] z-[50] `}></div>
    </div>
  );
};

export default ChooseCakePreview;
