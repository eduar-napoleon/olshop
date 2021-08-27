
import React from "react";
import Hamburger from "../sarasasset/menu-variant.svg"
import Logo from "../sarasasset/simbol.svg"
import Thumbnail from "../sarasasset/thumbnailphoto.svg"
import Search from "../sarasasset/searchmore.svg"
import Earphone from "../sarasasset/earphone.svg"
import Arrow from "../assets/svg/arrow-right.svg"
import Wire from "../assets/svg/wire.svg"


function Home() {
    return(
        <div className="container mx-auto">
            <nav className="flex items- center justify-between mt-2">
                <img src={Hamburger} alt="" />
                <div className="flex items-center">
                <img className="bg-emc-green ml-2"src={Logo} alt="" />
                <h1 className="ml-2 font-bold text-2xl">Audio</h1>
                </div>
                <img src={Thumbnail} alt="" />
            </nav>
            <section className="mt-5">
                <h5>Hi,Andrea</h5>
                <p className="font-bold text-2xl mt-1">What are you looking for today?</p>
                <div className="flex items-center mt-3">
                <img src={Search} className="bg-emc-white mt-1 w-5 " alt="" />
                <input type="search" className="bg-emc-white p-1 mt-2" placeholder="Search headphone"/>
                </div>
            </section>
            <section >
                <div className="bg-emc-brokenWhite rounded-lg mt-5 ">
                <div className="mt-5 ml-2">
                    <button className="bg-emc-green  mt-3 rounded-xl text-center w-2/6  h- py-1 text-white font-bold">Headphone</button>
                    <button className=" bg-emc-brokenWhite mt-3  rounded-xl py-1 text-center w-2/6  h- text-emc-gray font-bold" >Headband</button>
                    <button  className="  bg-emc-brokenWhite mt-3 rounded-xl py-1 text-center  w-2/6  h- text-emc-gray font-bold">Earpads</button>
                </div>
                <div className="mx-auto flex-wrap bg-emc-white rounded-lg mt-3">
                    
                    <div className="flex ">
                    <p  className="text-5xl font-bold flex flex-col mt-4 mb-4">TMA-2 Modular Headphone </p>
                    <img src={Earphone} alt="" />
                    </div>
                    <div className="flex items-center ">
                    <a href="" className="text-emc-green ml-4 mb-2 ">Shop Now</a>
                    <img clasName="ml-4 mb-3"src={Arrow} alt="" />
                    </div> 
                </div>
                <div className="flex justify-between mt-4 my-3">
                <p className="ml-3">Feature Product</p>
                <p className="text-emc-gray mr-3">See All</p>
                </div>
                <div className="flex justify-center">
                    <div className="flex-row flex-wrap bg-emc-white rounded-lg  gap-x-5 py-3 px-3 my-5 ml-3" >
                    <img src={Earphone} alt="" />
                    <div>
                    <p>TMA-2 HD Wireless</p>
                    <span>Usd 350</span>
                    </div>
                    </div>
                    <div className="flex-row flex-wrap bg-emc-white rounded-lg gap-x-5 py-3 px-3 my-5 ml-3 items-center">
                    <img src={Wire} alt="" />
                    <div className="mt-1">
                    <p>C0-2 Cable</p>
                    <span>Usd 25</span>
                    </div>
                    </div>
                </div>
                </div>
               
                {/* <div className="flex" >
                <img src={Earphone} alt="" />
                <div className="flex-row flex-wrap bg-emc-white rounded-lg">
                <p>TMA-2 HD Wireless</p>
                    <span>Usd 350</span>
                </div>
                <div className="flex-row flex-wrap bg-emc-white rounded-lg">
                    <img src={Wire} alt="" />
                    <div>
                    <p>C0-2 Cable</p>
                    <span>Usd 25</span>
                    </div>
                    </div>
                </div> */}
                
            </section>
        </div>
    )
};

export default Home;
