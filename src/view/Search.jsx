import React, { useState, useEffect } from "react";
import back from "../assets/svg/back.svg";
import cart from "../assets/svg/chart.svg";
import search from "../assets/svg/search.svg";
import star from "../assets/svg/yellowStar.svg";
import close from "../assets/svg/close.svg";
import Earphone from "../assets/svg/headset.svg";
import clock from "../assets/svg/clock.svg";
import dots from "../assets/svg/dots.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  allProductsSelector,
  allProduct,
} from "../store/features/product/fetchProduct";
import Axios from "../utils/AxiosWrapper";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const [datas, setDatas] = useState([]);
  const [name, setName] = useState("")
  const filteredProduct = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "sw-access-key": "SWSCRNHTCEHIWKH5VJB4EJBZSG",
      },
    };
    const body = {
      page: 1,
      limit: 50,
      filter: [
        {
          type: "equals",
          field: "name",
          value: searchText,
        },
      ],
    };
    Axios.post("/product", body, config)
      .then((res) => {
        // console.log(res);
        setDatas(res.data.elements);
        setName(res.data.elements.name)
        console.log(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    filteredProduct();
    setResult(datas);
  }, [searchText]);

  const data = [
    {
      img: Earphone,
      title: "TMA-2 Comfort Wireless",
      price: "USD 270",
    },
    {
      img: Earphone,
      title: "TMA-2 Comfort Wireless",
      price: "USD 270",
    },
    {
      img: Earphone,
      title: "TMA-2 Comfort Wireless",
      price: "USD 270",
    },
    {
      img: Earphone,
      title: "TMA-2 Comfort Wireless",
      price: "USD 270",
    },
  ];
  return (
    <div className="container">
      <section>
        <div className="flex flex-row justify-between my-5 container">
          <Link to="/">
            <img src={back} alt="" />
          </Link>
          <p className="font-bold">Search</p>
          <Link to="/add-to-cart">
            <img src={cart} alt="" />
          </Link>
        </div>
      </section>
      <section className="flex mt-3 mx-auto ml-3">
        <div className="flex mx-auto border border-emc-gray rounded-xl w-11/12">
          <img src={search} className="bg-emc-white mt-1 w-5 mx-2" alt="" />
          <input
            type="search"
            className="bg-transparent p-1 mt-2 "
            placeholder="Search headphone"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
        </div>
      </section>
      <section className="my-4">
        <div className="flex flex-col my-3 container gap-y-3">
          <p>Lastest search</p>
          <div className="flex justify-between">
            <div className="flex flex-row gap-x-2">
              <img src={clock} className="bg-emc-white w-5" alt="" />
              <p>TMA Wireless</p>
            </div>
            <img src={close} className="bg-emc-white w-5 " alt="" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row gap-x-2">
              <img src={clock} className="bg-emc-white w-5 " alt="" />
              <span>Cable</span>
            </div>
            <img src={close} className="bg-emc-white w-5 " alt="" />
          </div>
        </div>
      </section>
      <section className="my-4 container">
        <div className="flex flex-col">
          <p>Popular product</p>
          {datas.map((col, idx) => {
            return (
              <div
                className="grid grid-cols-3 rounded-lg gap-x-5 py-3 px-2"
                key={idx}
              >
                <img
                  src={col.cover.media.url}
                  className="bg-emc-brokenWhite mt-1 w-4/5 rounded-xl"
                  alt=""
                />

                <div className="flex flex-col gap-y-2 col-span-2">
                  <p className="whitespace-nowrap">{col.translated.name}</p>
                  <span className="font-bold">{col.calculatedPrice.unitPrice}</span>
                  <div className="flex flex-row gap-x-3 justify-between">
                    <div className="flex flex-row gap-x-2">
                      <img src={star} className="mt-1  " alt="" />
                      <span>4.6</span>
                      <p>86 Review</p>
                    </div>

                    <div className="flex flex-row-reverse">
                      <img src={dots} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Search;
