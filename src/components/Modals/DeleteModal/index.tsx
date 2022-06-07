import { FC } from "react";
import BaseModal from "@/components/Modals/BaseModal";
import { CustomModalProps } from "@/helpers/interfaces";

import "./DeleteModal.sass";

const DeleteModal: FC<CustomModalProps> = ({
  open,
  confirm,
  cancel,
}: CustomModalProps) => (
  <BaseModal open={open} confirm={confirm} cancel={cancel}>
    <div className="modal-delete">
      <h1>Delete a record</h1>
      <div>Do you really want to delete this record?</div>
    </div>
  </BaseModal>
);

export default DeleteModal;
