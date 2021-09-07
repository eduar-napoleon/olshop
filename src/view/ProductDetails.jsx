import React, { useEffect, useState } from "react";
import back from "../assets/svg/back.svg";
import cart from "../assets/svg/chart.svg";
import image from "../assets/svg/headset.svg";
import picture from "../assets/svg/picture.svg";
import picture2 from "../assets/svg/picture2.svg";
import stars from "../assets/svg/yellowStar.svg";
import blankStars from "../assets/svg/star.svg";
import wire from "../assets/svg/wire.svg";
import wirelss from "..//assets/svg/wireless.svg";
import buds from "../assets/svg/buds.svg";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import earphone from "../assets/image/image6.png";
import { useParams } from "react-router-dom";
import Axios from "../utils/AxiosWrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  allProductsSelector,
  allProduct,
} from "../store/features/product/fetchProduct";

function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({
    productData: [],
  });
  const [price, setPrice] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [imgProduct, setImgProduct] = useState("");
  const dispatch = useDispatch();
  const { products } = useSelector(allProductsSelector);
  useEffect(() => {
    dispatch(allProduct());
  }, [dispatch]);

  const getProductDetail = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "sw-access-key": "SWSCRNHTCEHIWKH5VJB4EJBZSG",
      },
    };
    Axios.post(`/product/${id}`, {}, config)
      .then((res) => {
        console.log(res);
        setProduct({
          productData: res.data.product,
        });
        setPrice(res.data.product.calculatedCheapestPrice.unitPrice);
        setImgProduct(res.data.product.cover.media.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  const { productData } = product;
  const { name } = productData;

  const getReview = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "sw-access-key": "SWSCRNHTCEHIWKH5VJB4EJBZSG",
      },
    };
    Axios.post(`/product/${id}/reviews`, {}, config)
      .then((res) => {
        console.log(res);
        setReviews(res.data.elements);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getReview();
  }, []);

  const feature = [
    {
      photo: buds,
      title: "ULTRA SOFT WITH ALCANTARA",
      desc: "Alcantara® is a highly innovative material offering an unrivalled combination of",
    },
    {
      photo: wirelss,
      title: "APTX HD WIRELESS AUDIO",
      desc: "The Aptx® HD codec transmits 24-bit hi-res audio, equal to or better than CD quality.",
    },
  ];
  const images = [{ url: earphone }, { url: earphone }, { url: earphone }];

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
        <div className="d-flex flex-row gap-2">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={blankStars} alt="" />
        </div>
      ),
      "five stars": (
        <div className="d-flex flex-row gap-2">
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
          <img src={stars} alt="" />
        </div>
      ),
      "three stars": (
        <div className="d-flex flex-row gap-2">
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
    <div className="container bg-emc-white py-3">
      <section>
        <div className="flex flex-row justify-between my-3">
          <Link to="/">
            <img src={back} alt="" />
          </Link>
          <Link to="/add-to-cart">
            <img src={cart} alt="" />
          </Link>
        </div>
      </section>
      <section>
        <div className="flex flex-column gap-y-5">
          <p className="text-emc-green font-bold text-xl">{price}</p>
          <p className="font-bold text-5xl">{name}</p>

          <div>
            <Tab.Group>
              <Tab.List className="flex flex-row justify-between mx-2">
                <Tab>Overview</Tab>
                <Tab>Features</Tab>
                <Tab>Specification</Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <section>
                    {/* <div className="rounded-lg my-5 flex flex-grow gap-x-4 relative overflow-auto"> */}
                    {/* <div className="flex flex-row gap-x-2 bg-emc-brokenWhite rounded-xl py-5 min-w-lg"> */}
                    <div className="flex justify-center items-center my-3 rounded-lg bg-emc-brokenWhite">
                      <SimpleImageSlider
                        width={305}
                        height={391}
                        images={images}
                        showNavs={true}
                        bgColor={"#F6F6F6"}
                      />
                    </div>

                    {/* </div> */}
                    {/* </div> */}
                  </section>
                  <section>
                    <div className="d-flex flex-column">
                      <p className="my-5">
                        Review <span>({reviews.length})</span>
                      </p>

                      {reviews.length === 0 ? (
                        <div>
                          <p>No Review yet</p>
                        </div>
                      ) : (
                        data.map((items, idx) => {
                          return (
                            <div className="flex flex-col">
                              <div className="grid grid-cols-4 gap-x-5 phone:gap-x-2 my-2">
                                <Link to="/profile">
                                  <img
                                    src={picture}
                                    alt=""
                                    className="h-16 w-16"
                                  />
                                </Link>
                                <div className="d-flex flex-column col-span-2 gap-y-2">
                                  <p>{items.name}</p>
                                  <div>{__renderReviewStars(items.stars)}</div>
                                </div>
                                <p className="flex flex-row-reverse text-sm">
                                  {items.date}
                                </p>
                              </div>
                              <p className="my-2 ml-24">{items.review}</p>
                            </div>
                          );
                        })
                      )}
                      <p className="text-emc-gray text-center my-3">
                        See All Reviews
                      </p>
                    </div>
                  </section>
                  <section className="mb-16 ">
                    <div className="bg-emc-brokenWhite container flex-col flex gap-x-5 my-3">
                      <div className="flex flex-row justify-between my-3">
                        <p className="text-lg">Another Product</p>
                        <p className="text-emc-gray">See All</p>
                      </div>
                      <div className="flex flex-grow overflow-auto relative ">
                        {products.map((col, idx) => {
                          return (
                            <div
                              className="bg-emc-white flex justify-center items-center w-32 h-60 flex-col gap-y-3 my-3 mx-2 rounded-xl min-w-sm"
                              key={idx}
                            >
                              <img
                                alt=""
                                src={col.cover.media.url}
                                className="my-3 h-36 w-36"
                              />
                              <p className="text-lg font-bold m-1">
                                {col.translated.name}
                              </p>
                              <p>{col.calculatedCheapestPrice.unitPrice}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                </Tab.Panel>
                <Tab.Panel>
                  <section>
                    <div className="flex flex-col gap-y-2 container mt-10 mb-3">
                      <p className="font-bold text-lg">Highly Detailed Audio</p>
                      <p>
                        The speaker unit contains a diaphragm that is
                        precision-grown from NAC Audio bio-cellulose, making it
                        stiffer, lighter and stronger than regular PET speaker
                        units, and allowing the sound-producing diaphragm to
                        vibrate without the levels of distortion found in other
                        speakers.{" "}
                      </p>
                      <p>
                        The speaker unit contains a diaphragm that is
                        precision-grown from NAC Audio bio-cellulose, making it
                        stiffer, lighter and stronger than regular PET speaker
                        units, and allowing the sound-producing diaphragm to
                        vibrate without the levels of distortion found in other
                        speakers.{" "}
                      </p>
                    </div>
                  </section>
                  <section className="flex flex-col mb-20">
                    {feature.map((col, idx) => {
                      return (
                        <>
                          <div className="flex flex-row my-3 gap-x-3 container">
                            <img src={col.photo} alt="" />
                            <div className="flex flex-col">
                              <p className="font-bold text-lg">{col.title}</p>
                              <p className="text-sm">{col.desc}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </section>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <Link to="/add-to-cart">
          <button className="bg-emc-green rounded-xl text-center w-11/12 py-2 text-white font-bold fixed bottom-5">
            Add To Cart
          </button>
        </Link>
      </section>
    </div>
  );
}

export default ProductDetails;
