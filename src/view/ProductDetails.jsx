import React from "react";
import back from "../assets/svg/back.svg";
import cart from "../assets/svg/chart.svg";
import image from "../assets/svg/headset.svg";
import picture from "../assets/svg/picture.svg";
import picture2 from "../assets/svg/picture2.svg";
import stars from "../assets/svg/yellowStar.svg";
import blankStars from "../assets/svg/star.svg";
import wire from "../assets/svg/wire.svg";

function ProductDetails() {
  const cards = [
    {
      items: wire,
      name: "C02 - Cable",
      price: "USD 25",
    },
    {
      items: image,
      name: "TMA-2 HD Wireless",
      price: "USD 350",
    },
  ];
  const img = [
    {
      source: image,
    },
    {
      source: picture2,
    },
  ];
  const data = [
    {
      name: "Madelina",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stars: "four stars",
      date: "1 Month ago",
    },
    {
      name: "Irfan",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      stars: "five stars",
      date: "1 Month ago",
    },
    {
      name: "Ravi Putra",
      review: "Excepteur sint occaecat cupidatat non proident",
      stars: "five stars",
      date: "1 Month ago",
    },
    {
      name: "Dimas",
      review:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      stars: "three stars",
      date: "1 Month ago",
    },
  ];

  const __renderReviewStars = (status) => {
    const label = {
      "four stars": (
        <div className="d-flex flex-row gap-3">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={blankStars} alt="" />
        </div>
      ),
      "five stars": (
        <div className="d-flex flex-row gap-3">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
        </div>
      ),
      "three stars": (
        <div className="d-flex flex-row gap-3">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={blankStars} alt="" />
          <img src={blankStars} alt="" />
        </div>
      ),
    };

    return label[status];
  };
  return (
    <div className="container">
      <section>
        <div className="flex flex-row justify-between my-5">
          <img src={back} alt="" />
          <img src={cart} alt="" />
        </div>
      </section>
      <section>
        <div className="d-flex flex-column gap-y-5">
          <p className="text-emc-green font-bold">USD 350</p>
          <p className="font-bold text-5xl">TMA-2 HD WIRELESS</p>
          <div className="d-flex flex-row justify-between">
            <p>Overview</p>
            <p>Features</p>
            <p>Specification</p>
          </div>
        </div>
      </section>
      <section>
        <div className="rounded-lg my-5 flex justify-center items-center">
          {img.map((col, idx) => {
            return (
              <>
                <img src={col.source} alt="" className="rounded-2 img-fluid" />
              </>
            );
          })}
        </div>
      </section>
      <section>
        <div className="d-flex flex-column">
          <p className="my-5">
            Review <span>()</span>
          </p>

          {data.map((items, idx) => {
            return (
              <div className="grid grid-cols-4 gap-x-5 my-3">
                <img src={picture} alt="" className="h-24 w-24" />
                <div className="d-flex flex-column col-span-2 gap-y-2">
                  <p>{items.name}</p>
                  <div>{__renderReviewStars(items.stars)}</div>
                  <p>{items.review}</p>
                </div>
                <p className="flex flex-row-reverse">{items.date}</p>
              </div>
            );
          })}
          <p className="text-emc-gray text-center my-5">See All Reviews</p>
        </div>
      </section>
      <section>
        <div className="bg-emc-brokenWhite container flex-col flex gap-x-5 my-5">
          <div className="flex flex-row justify-between my-5">
            <p className="text-lg">Another Product</p>
            <p className="text-emc-gray">See All</p>
          </div>
          {cards.map((col, idx) => {
            return (
              <divss className="grid grid-cols-2 overflow-x-scroll">
                <div className="bg-emc-white flex justify-center items-center w-[155px] h-[214px] flex-col gap-y-3 my-5 mx-3 rounded-xl">
                  <img
                    alt=""
                    src={col.items}
                    className="my-3 h-[125px] w-[125px]"
                  />
                  <p className="text-lg font-bold">{col.name}</p>
                  <p>{col.price}</p>
                </div>
              </divss>
            );
          })}
        </div>
        <button className="bg-emc-green rounded-xl text-center w-full py-2 text-white font-bold">
          Add To Cart
        </button>
      </section>
    </div>
  );
}

export default ProductDetails;
