import { PropsWithChildren } from "react";
import instagram from "../../assets/instagram.svg";
import { PHONE_NUMBER } from "../../static/constants";
type ContactProps = {
  children?: React.ReactNode;
};
const Contact = (props: ContactProps) => {
  return (
    <div className="flex justify-center items-center mt-36">
      <div className=" w-[80vw] h-[50vh] bg-navy-light-20 box-border flex flex-col items-center justify-evenly text-neutral-100 rounded-lg">
        <h3 className="text-4xl">Kontakt</h3>
        <p className="text-xl px-10">
          Aby skontaktować się ze mną zadzwoń pod numer {PHONE_NUMBER}. Możesz
          sprawdzić również moje najnowsze wypieki na instagramie.
        </p>
        <img
          src={instagram}
          alt="instagram"
          className="w-12 h-12 hover:scale-105 transition-all"
        />
      </div>
    </div>
  );
};

export default Contact;
