import React, { useState } from "react";
import back from "../assets/svg/back.svg";
import trash from "../assets/svg/trash.svg";
import wire from "../assets/svg/wire.svg";
import image from "../assets/svg/headset.svg";
import plus from "../assets/svg/plus.svg";
import minus from "../assets/svg/minus.svg";
import trash2 from "../assets/svg/trash2.svg";
import right from "../assets/svg/right.svg";
import { Link } from "react-router-dom";
function AddToCart() {
  const [count, setCount] = useState(0);
  const data = [
    {
      img: wire,
      name: "TMA-2 Comfort Wireless",
      price: "USD 270",
    },
    {
      img: image,
      name: "C02 - Cable",
      price: "USD 25",
    },
  ];
  return (
    <div className="container bg-emc-white">
      <section>
        <div className="flex flex-row justify-between my-3">
          <Link to="/product-detail">
            <img src={back} alt="" />
          </Link>
          <p className="font-bold text-sm mt-1">Shopping Cart</p>
          <img src={trash} alt="" />
        </div>
      </section>
      <section className="mb-48">
        {data.map((col, idx) => {
          return (
            <>
              <div className="grid grid-cols-3 gap-x-3 mx-2 my-3">
                <div className="bg-emc-brokenWhite rounded-lg flex items-center">
                  <img src={col.img} alt="" className="h-20 w-20" />
                </div>

                <div className="flex flex-col gap-y-2 col-span-2">
                  <p className="font-bold">{col.name}</p>
                  <p className="text-sm">{col.price}</p>
                  <div className="flex flex-row gap-x-5">
                    <button onClick={() => setCount(count - 1)}>
                      <img src={minus} alt="" className="h-7 w-7" />
                    </button>
                    <span className="mt-1">{count}</span>
                    <button onClick={() => setCount(count + 1)}>
                      <img src={plus} alt="" className="h-7 w-7" />
                    </button>
                    <div className="flex flex-row-reverse mt-2 ml-5">
                      <img src={trash2} alt="" className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
      <section>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-sm mt-1">Total 2 Items</p>
            <p className="font-bold text-lg">USD 295</p>
          </div>
          <button className="bg-emc-green rounded-xl w-11/12 py-2 text-white font-bold fixed bottom-5 flex flex-row items-center justify-center gap-x-3 text-sm">
            Proceed to Checkout{" "}
            <span>
              <img src={right} alt="" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default AddToCart;
