import React, { useState } from "react";
import {ModalFilter } from "../modal/ModalFilter.jsx";
function Modal() {
  const [modal, setModal] = useState({ modalFilter: false });
  return (
    <div>
      <button onClick={() => setModal({ ...modal, modalFilter: true })}>
        Modal Filter
      </button>
      <ModalFilter
        isOpen={modal.modalFilter}
        data={{}}
        onClose={() => setModal({ ...modal, modalFilter: false })}
      />
    </div>
  );
}

export default Modal;
