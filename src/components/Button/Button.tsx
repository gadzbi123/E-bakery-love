import { FC, PropsWithChildren } from "react";

export type buttonProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Button: FC<buttonProps> = (props) => {
  return <button className={` ${props.className}`}>{props.children}</button>;
};
