import React from "react";
import close from "../../assets/svg/close.svg";
import ModalWrapper from "./ModalWrapper";

function ModalFilter({ isOpen, data, onClose }) {
  return (
      <ModalWrapper isOpen={isOpen} onClose={onClose} md wrapperClass="bg-emc-white">
      <div className="bg-emc-white rounded-t-xl container">
        <section className="my-5">
          <div className="flex flex-row justify-between container">
            <p className="font-bold text-2xl">Filter</p>
            <img src={close} alt="" onClick={onClose}/>
          </div>
        </section>
        <section className="my-3 container">
          <div className="flex flex-col gap-y-4">
            <p>Category</p>
            <div className="flex flex-row gap-x-10 text-emc-gray relative overflow-auto">
              <div className="bg-emc-green rounded-full text-emc-white px-3 py-1">
                <p>Headphone</p>
              </div>
              <p>Headband</p>
              <p>Earpads</p>
              <p>Cable</p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-y-3 container">
            <p>Sort By</p>
            <div className="flex flex-row flex-wrap gap-4">
              <div className="bg-emc-green rounded-xl text-white px-3 py-2">
                <p>Popularity</p>
              </div>

              <p className="border border-emc-gray px-3 py-2 rounded-xl">
                Newest
              </p>
              <p className="border border-emc-gray px-3 py-2 rounded-xl">
                Oldest
              </p>
              <p className="border border-emc-gray px-3 py-2 rounded-xl">
                High Price
              </p>
              <p className="border border-emc-gray px-3 py-2 rounded-xl">
                Low Price
              </p>
              <p className="border border-emc-gray px-3 py-2 rounded-xl">
                Review
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col container my-3 gap-y-3">
            <p>Price Range</p>
            <div className="flex flex-row gap-x-4">
              <div className="border-emc-lightGray border rounded-xl w-1/2 py-2 text-emc-lightGray">
                <input
                  placeholder="Min Price"
                  className="bg-transparent py-2 px-2"
                />
              </div>
              <div className="border-emc-lightGray border rounded-xl w-1/2 py-2 text-emc-lightGray">
                <input
                  placeholder="Max Price"
                  className="bg-transparent py-2 px-2"
                />
              </div>
            </div>
            <div className="justify-center items-center flex my-4">
            <button className="bg-emc-green flex w-11/12 justify-center items-center text-emc-white py-3 rounded-xl font-bold">
                Apply Filter
            </button>

            </div>
           
          </div>
        </section>
      </div>

      </ModalWrapper>
  );
}

export default ModalFilter;
