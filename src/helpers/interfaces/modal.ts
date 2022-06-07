import { ChildrenProps } from "./children";

export interface ModalProps extends ChildrenProps {
  confirm: () => void;
  cancel: () => void;
  open: boolean;
}

export interface CustomModalProps extends Omit<ModalProps, "children"> {}
