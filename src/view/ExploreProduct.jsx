import React, { useState } from "react";
import back from "../assets/svg/back.svg";
import cart from "../assets/svg/chart.svg";
import filter from "../assets/svg/filter.svg";
import star from "../assets/svg/yellowStar.svg";
import Earphone from "../assets/svg/headset.svg";
import  ModalFilter  from "../components/modal/ModalFilter";

function ExploreProduct(props) {
  const [modal, setModal] = useState({ modalFilter: false });
  const data = [
    {
      img: Earphone,
      title: "TMA-2 HD Wireless",
      price: "USD 350",
    },
    {
      img: Earphone,
      title: "TMA-2 HD Wireless",
      price: "USD 350",
    },
    {
      img: Earphone,
      title: "TMA-2 HD Wireless",
      price: "USD 350",
    },
    {
      img: Earphone,
      title: "TMA-2 HD Wireless",
      price: "USD 350",
    },
  ];
  return (
    <div>
      <section>
        <div className="flex flex-row justify-between my-4 container">
          <img src={back} alt="" />
          <img src={cart} alt="" />
        </div>
      </section>
      <section className="container mb-3">
        <h2 className=" text-1xl ">Headphone</h2>
        <p className="font-bold text-3xl mt-3">TMA Wireless</p>
      </section>
      <section className="flex container justify-center my-3 ">
        <div className="flex gap-x-10 flex-row overflow-auto relative">
          <div className="border border-emc-gray rounded-lg flex flex-row gap-x-2 px-4 py-2 ">
            <img src={filter} alt="" />
            <button onClick={() => setModal({ ...modal, modalFilter: true })}>
              Filter
            </button>
          </div>
          <button>Popularity</button>
          <button>Newest</button>
          <button>Newest</button>
          <button className="whitespace-nowrap">Most Expensive</button>
        </div>
      </section>
      <section>
        <div className="bg-emc-brokenWhite py-5 rounded-t-explore container">
          <div className="grid grid-cols-2 container gap-3 py-3 px-3">
            {data.map((col, idx) => {
              return (
                <div className="flex-col flex flex-wrap bg-emc-white rounded-lg justify-center py-3 px-2 items-center gap-y-3">
                  <img src={col.img} alt="" />
                  <div className="my-3">
                    <p>{col.title}</p>
                    <span className="font-bold text-sm">{col.price}</span>
                    <div className="flex flex-row items-center gap-x-2 text-xs">
                      <img src={star} className="bg-emc-white w-3" alt="" />
                      <span>4.6</span>
                      <p>86 Review</p>
                      <i class="fas fa-ellipsis-v text-emc-gray"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ModalFilter
        isOpen={modal.modalFilter}
        data={{}}
        onClose={() => setModal({ ...modal, modalFilter: false })}
      />
    </div>
  );
}

export default ExploreProduct;
