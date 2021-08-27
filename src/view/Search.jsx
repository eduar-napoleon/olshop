import React from "react";
import back from "../assets/svg/chart.svg";
import cart from "../assets/svg/back.svg";
import search from "../sarasasset/searchmore.svg";
import clock from "../assets/svg/clock.svg";
import X from "../assets/svg/x.svg";
import thumbheadset from "../assets/svg/headset.svg";
import star from "../assets/svg/yellowStar.svg";
import "../sarasasset/icon/css/all.min.css";

function Search() {
  return (
    <div>
      <section>
        <div className="flex flex-row justify-between my-5">
          <img src={back} alt="" />
          <p className="font-bold">Search</p>
          <img src={cart} alt="" />
        </div>
      </section>
      <section className="flex items-center mt-3 block mx-auto ml-3">
          <div className="flex ml-4 block mx-auto">
          <img src={search} className="bg-emc-white mt-1 w-5 " alt="" />
        <input
          type="search"
          className="bg-emc-white p-1 mt-2 "
          placeholder="Search headphone"
        />
          </div>
       
      </section>
      <section>
        <p>Lastest search</p>
        <div className="flex justify-between">
            <div className="flex">
            <img src={clock} className="bg-emc-white mt-1 w-5 " alt="" />
          <span>TMA Wireless</span>
            </div>
          <img src={X} className="bg-emc-white mt-1 w-5 " alt="" />
        </div>
        <div className="flex justify-between">
            <div className="flex">
            <img src={clock} className="bg-emc-white mt-1 w-5 " alt="" />
          <span>Cable</span>
            </div>
          <img src={X} className="bg-emc-white mt-1 w-5 " alt="" />
        </div>
      </section>
      <section>
        <p>Popular product</p>
        <div className="flex flex-wrap  rounded-lg  gap-x-5 py-3 px-2 my-5 ml-3 items-center">
          <img src={thumbheadset} className="bg-emc-brokenWhite mt-1 w-1/6 " alt="" />
          <div>
            <p>TMA-2 Comfort Wireless</p>
            <span>USD 270</span>
            <div className="d-flex flex-row items-center">
            <img src={star} className="bg-emc-white mt-1  " alt="" />
          <span>4.6</span>
          <p>86 Review</p>
          <i class="fas fa-ellipsis-v text-emc-gray"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  rounded-lg  gap-x-5 py-3 px-2 my-5 ml-3 items-center">
          <img src={thumbheadset} className="bg-emc-brokenWhite mt-1 w-1/6 " alt="" />
          <div>
            <p>TMA-2 Comfort Wireless</p>
            <span>USD 270</span>
            <div className="d-flex flex-row items-center">
            <img src={star} className="bg-emc-white mt-1 w-5 " alt="" />
          <span>4.6</span>
          <p>86 Review</p>
          <i class="fas fa-ellipsis-v text-emc-gray"></i>
            </div>
          </div>
        </div>
         
        <div className="flex flex-wrap  rounded-lg  gap-x-5 py-3 px-2 my-5 ml-3 items-center">
          <img src={thumbheadset} className="bg-emc-brokenWhite mt-1 w-1/6 " alt="" />
          <div>
            <p>TMA-2 Comfort Wireless</p>
            <span>USD 270</span>
            <div className="d-flex flex-row items-center">
            <img src={star} className="bg-emc-white mt-1 w-5 " alt="" />
          <span>4.6</span>
          <p>86 Review</p>
          <i class="fas fa-ellipsis-v text-emc-gray"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  rounded-lg  gap-x-5 py-3 px-2 my-5 ml-3 items-center">
          <img src={thumbheadset} className="bg-emc-brokenWhite mt-1 w-1/6 " alt="" />
          <div>
            <p>TMA-2 Comfort Wireless</p>
            <span>USD 270</span>
            <div className="d-flex flex-row items-center">
            <img src={star} className="bg-emc-white mt-1 w-5 " alt="" />
          <span>4.6</span>
          <p>86 Review</p>
          <i class="fas fa-ellipsis-v text-emc-gray"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
