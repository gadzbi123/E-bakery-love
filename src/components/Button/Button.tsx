import { FC, PropsWithChildren } from "react";

export enum ButtonType {
  base = "base",
  inverted = "inverted",
  important = "important",
}

// export type buttonProps = {
//   children?: React.ReactNode;
//   className?: string;
//   buttonType?: ButtonType;
// } & React.DetailedHTMLProps<
//   React.ButtonHTMLAttributes<HTMLButtonElement>,
//   HTMLButtonElement
// > &
//   React.AriaAttributes;
export type buttonProps = PropsWithChildren<{
  children?: React.ReactNode;
  className?: string;
  buttonType?: ButtonType;
}> &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
  React.AriaAttributes;

export const Button = (props: buttonProps) => {
  const { children, buttonType, className, ...restProps } = props;
  const style = () => {
    const baseStyle = `bg-yellow border-slate-950`;
    const inverted = `bg-[#7a93f7] border-slate-300`;
    const important = `bg-red-600 text-red-100 border-slate-950`;
    switch (buttonType ?? ButtonType.base) {
      case ButtonType.base:
        return baseStyle;
      case ButtonType.inverted:
        return inverted;
      case ButtonType.important:
        return important;
    }
  };
  return (
    <div
      className={`flex justify-center items-center  w-52 ${className ?? ""}`}>
      <button
        {...restProps}
        className={`${style()} px-6 py-3 w-full h-full appearance-none rounded-xl text-lg border border-solid 
      hover:shadow-lg hover:-translate-y-[4px]
      active:shadow-md active:-translate-y-[2px]
      transition-all `}>
        {children}
      </button>
    </div>
  );
};
