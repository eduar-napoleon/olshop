import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";

function ModalWrapper() {
  const ModalWrapper = ({
    children,
    isOpen,
    onClose,
    maxHeight,
    sm,
    md,
    lg,
    wrapperClass = "",
    ...props
  }) => {
    return (
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          onClose={onClose}
          as="div"
          className={`z-10 fixed inset-0  flex items-center justify-center ${
            isOpen && ""
          }`}
        >
          <Dialog.Overlay className="fixed inset-0 bg-white opacity-30" />
          <Transition.Child
            // appear
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div
              className={`${sm && "w-[360px]"} ${md && "w-[720px]"} ${
                maxHeight ? maxHeight : "max-h-[80%]"
              } z-50 flex flex-col py-8 px-6  rounded-xl overflow-y-auto ${wrapperClass} `}
            >
              {children}
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    );
  };

  ModalWrapper.propTypes = {
    wrapperClass: PropTypes.string.isRequired,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    maxHeight: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
}

export default ModalWrapper;
