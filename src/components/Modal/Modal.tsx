import { FC, PropsWithChildren, ReactNode } from "react";
type ModalProps = { children: ReactNode; handleCloseModal: () => void };
const Modal = (props: PropsWithChildren<ModalProps>) => {
  const modalClose = (
    e: React.MouseEvent<HTMLDivElement> & { target: { id: string } }
  ) => {
    if (e.target.id === "modal") {
      props.handleCloseModal();
    }
  };

  return (
    <div
      id="modal"
      className=" fixed z-50 top-0 left-0 w-full h-full bg-[#00000025]"
      onClick={modalClose}>
      <div className="h-[60%] w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative">
        {props.children}
      </div>
    </div>
  );
};
export default Modal;
