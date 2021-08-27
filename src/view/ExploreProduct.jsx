import React from "react";
import back from "../assets/svg/chart.svg";
import cart from "../assets/svg/back.svg";
import filter from "../sarasasset/filter.svg";
import Earphone from "../sarasasset/earphone.svg";
import star from "../assets/svg/yellowStar.svg";


function ExploreProduct() {
  return (
    <div>
      <section>
        <div className="flex flex-row justify-between my-5">
          <img src={back} alt="" />
          <img src={cart} alt="" />
        </div>
      </section>
      <section className="ml-3 mb-3">
        <h2 className=" text-1xl ">Headphone</h2>
        <p className="font-bold text-3xl mt-3">TMA Wireless</p>
      </section>
      <section className="flex items-center">
        <div className="flex items-center">
          <img src={filter} alt="" />
          <button>Filter</button>
        </div>

        <button>Popularity</button>
        <button>Newest</button>
        <button>Newest</button>
        <button>Most Expensive</button>
      </section>
      <section className="bg-emc-brokenWhite">
        <div className="flex justify-center">
          <div className="flex-row flex-wrap bg-emc-white rounded-lg  gap-x-5 py-3 px-2 my-5 ml-3 items-center">
            <img src={Earphone} alt="" />
            <div>
              <p>TMA-2 HD Wireless</p>
              <span>Usd 350</span>
              <div className="d-flex flex-row items-center">
                <img src={star} className="bg-emc-white mt-1 w-5 " alt="" />
                <span>4.6</span>
                <p>86 Review</p>
                <i class="fas fa-ellipsis-v text-emc-gray"></i>
              </div>
            </div>
          </div>
          <div className="flex-row flex-wrap bg-emc-white rounded-lg gap-x-5 py-3 px-2 my-5 ml-3 items-center">
            <img src={Earphone} alt="" />
            <div>
              <p>TMA-2 HD Wireless</p>
              <span>Usd 350</span>
              <div className="d-flex flex-row items-center">
                <img src={star} className="bg-emc-white mt-1 w-5 " alt="" />
                <span>4.6</span>
                <p>86 Review</p>
                <i class="fas fa-ellipsis-v text-emc-gray"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex-row flex-wrap bg-emc-white rounded-lg  gap-x-5 py-3 px-2 my-5 ml-3 items-center">
            <img src={Earphone} alt="" />
            <div>
              <p>TMA-2 HD Wireless</p>
              <span>Usd 350</span>
              <div className="d-flex flex-row items-center">
                <img src={star} className="bg-emc-white mt-1 w-5 " alt="" />
                <span>4.6</span>
                <p>86 Review</p>
                <i class="fas fa-ellipsis-v text-emc-gray"></i>
              </div>
            </div>
          </div>
          <div className="flex-row flex-wrap bg-emc-white rounded-lg gap-x-5 py-3 px-2 my-5 ml-3 items-center">
            <img src={Earphone} alt="" />
            <div>
              <p>TMA-2 HD Wireless</p>
              <span>Usd 350</span>
              <div className="d-flex flex-row items-center">
                <img src={star} className="bg-emc-white mt-1 w-5 " alt="" />
                <span>4.6</span>
                <p>86 Review</p>
                <i class="fas fa-ellipsis-v text-emc-gray"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExploreProduct;
