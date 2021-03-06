import React, { useEffect, useState } from "react";
import menu from "../assets/svg/menu.svg";
import logo from "../assets/svg/logo.svg";
import right from "../assets/svg/arrow right.svg";
import wire from "../assets/svg/wire.svg";
import picture from "../assets/svg/picture.svg";
import search from "../assets/svg/search.svg";
import Earphone from "../assets/svg/headset.svg";
import { Link } from "react-router-dom";
import Axios from "../utils/AxiosWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  allProductsSelector,
  allProduct,
} from "../store/features/product/fetchProduct";

function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector(allProductsSelector);
  console.log(products);
  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <nav className="flex items- center justify-between my-3 container">
        <img src={menu} alt="" />
        <div className="flex items-center">
          <img className="bg-emc-green ml-2" src={logo} alt="" />
          <h1 className="ml-2 font-bold text-2xl">Audio</h1>
        </div>
        <Link to="/profile">
          <img src={picture} alt="" />
        </Link>
      </nav>
      <section className="mt-5 container">
        <h5>Hi, Andrea</h5>
        <p className="font-bold text-2xl mt-1">
          What are you looking for today?
        </p>
        <Link to="/search">
          <div className="flex items-center mt-3 border boder-emc-gray rounded-lg">
            <img src={search} className="bg-emc-white mt-1 w-5 mx-2" alt="" />
            <input
              type="search"
              className="bg-emc-white p-1 mt-2"
              placeholder="Search headphone"
            />
          </div>
        </Link>
      </section>
      <section>
        <div className="bg-emc-brokenWhite rounded-t-explore mt-5">
          <div className="mt-5 ml-2">
            <button className="bg-emc-green  mt-3 rounded-xl text-center w-2/6  h- py-1 text-white font-bold">
              Headphone
            </button>
            <button className=" bg-emc-brokenWhite mt-3  rounded-xl py-1 text-center w-2/6  h- text-emc-gray font-bold">
              Headband
            </button>
            <button className="  bg-emc-brokenWhite mt-3 rounded-xl py-1 text-center  w-2/6  h- text-emc-gray font-bold">
              Earpads
            </button>
          </div>
          <div className="mx-3 flex-wrap bg-emc-white rounded-lg mt-3">
            <Link to="product-detail/">
              <div className="flex flex-row mx-5">
                <p className="text-3xl font-bold flex flex-col mt-4 mb-4">
                  TMA-2 Modular Headphone{" "}
                </p>
                <img src={Earphone} alt="" className="phone:w-32" />
              </div>
              <div className="flex items-center mx-3">
                <a href="" className="text-emc-green ml-4 mb-2 ">
                  Shop Now
                </a>
                <img className="ml-4 mb-3" src={right} alt="" />
              </div>
            </Link>
          </div>

          <section className="mx-3">
            <div className="flex flex-col">
              <div className="flex justify-between mt-4 my-3">
                <p className="ml-3">Feature Product</p>
                <p className="text-emc-gray mr-3">See All</p>
              </div>

              <div className="flex flex-row gap-x-3 relative overflow-auto">
                {products.map((col, idx) => {
                  return (
                    <Link to={`/product-detail/${col.id}`}>
                      <div className="flex flex-col bg-emc-white container my-3 w-full rounded-xl min-w-sm gap-y-3">
                        <img
                          src={col.cover.media.url}
                          alt=""
                          className="py-2 w-32 h-32 flex justify-center items-center"
                        />
                        <div className="mt-1">
                          <p className="text-sm whitespace-nowrap">
                            {col.translated.name}
                          </p>
                          <span className="text-sm font-bold">
                            {col.calculatedCheapestPrice.unitPrice}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
