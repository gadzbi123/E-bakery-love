import { FC, PropsWithChildren } from "react";

export enum ButtonType {
  base = "base",
  inverted = "inverted",
  important = "important",
}

type BT = ButtonType.base | ButtonType.inverted | ButtonType.important;

export type buttonProps = {
  children?: React.ReactNode;
  className?: string;
  styleType?: BT;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  React.AriaAttributes;

export const Button: FC<buttonProps> = (props) => {
  const { children, styleType, ...restProps } = props;
  const style = () => {
    const baseStyle = `bg-yellow border-slate-950`;
    const inverted = `bg-[#7a93f7] border-slate-300`;
    const important = `bg-red-600 text-red-100 border-slate-950`;
    switch (styleType ?? ButtonType.base) {
      case ButtonType.base:
        return baseStyle;
      case ButtonType.inverted:
        return inverted;
      case ButtonType.important:
        return important;
    }
  };
  return (
    <button
      className={`${style()} px-6 py-3 max-w-[50%] appearance-none rounded-xl text-lg border border-solid 
        hover:shadow-lg hover:-translate-y-[4px]
        active:shadow-md active:-translate-y-[2px]
        transition-all ${props.className}`}
      {...restProps}>
      {children}
    </button>
  );
};
