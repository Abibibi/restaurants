import { FC, MouseEvent } from "react";
import { createPortal } from "react-dom";

import { ModalProps } from "@/helpers/interfaces";

import "./Modal.sass";

const Modal: FC<ModalProps> = ({
  children,
  confirm,
  cancel,
  open,
}: ModalProps) => {
  function cancelModal(event: MouseEvent): void {
    event.stopPropagation();
    cancel();
  }

  return open
    ? createPortal(
        <div className="modal" onClick={cancelModal}>
          <div className="modal-content">
            {children}
            <div className="modal-buttons">
              <button className="modal-buttons-cancel" onClick={cancel}>
                Annuler
              </button>
              <button className="modal-buttons-confirm" onClick={confirm}>
                Confirmer
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};
export default Modal;
