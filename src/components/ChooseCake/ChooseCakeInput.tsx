type ChooseCakeInputProps = {
  name: string;
  id: string;
  label: string;
  peerRoot: string;
  peerLabel: string;
  peerBackground: string;
  inputBackground: string;
  peerBorder: string;
  className?: string;
};
const ChooseCakeInput: React.FC<ChooseCakeInputProps> = ({
  name,
  id,
  label,
  peerRoot,
  peerLabel,
  peerBackground,
  inputBackground,
  peerBorder,
  className,
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        type="radio"
        name={name}
        value={id}
        className={`${peerRoot} appearance-none w-4 h-4 bg-gray-100 border-gray-300 rounded-full ${inputBackground} checked:border-transparent  mr-2 relative z-20`}
      />
      <label htmlFor={id} className={` text-xl ${peerLabel} relative z-20`}>
        {label}
      </label>
      <div
        className={`absolute w-full h-full ${peerBackground} top-0 left-0 scale-[1.3] z-10 opacity-10 rounded-md border-solid ${peerBorder} border-gray-950`}></div>
      {/* py-7 translate-y-[-75%] */}
    </div>
  );
};
export default ChooseCakeInput;
