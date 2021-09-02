import React, { useEffect, useState } from "react";
import email from "../assets/svg/email.svg";
import lock from "../assets/svg/lock.svg";
import apple from "../assets/svg/Apple Auth.svg";
import facebook from "../assets/svg/Facebook Auth.svg";
import google from "../assets/svg/Google Auth.svg";
import { Link } from "react-router-dom";
import Axios from "../utils/AxiosWrapper";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  registerUser,
  userSelector,
} from "../store/features/auth/registerSlice";
import { regisUser } from "../store/features/auth/registerSlice";

function Register() {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  // const {isSuccess, isError, errorMessage } =
  //   useSelector(userSelector);
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(regisUser());
    };
  }, []);

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(regisUser());
  //     history.push("/");
  //   }

  //   if (isError) {
  //     console.error(errorMessage);
  //     dispatch(regisUser());
  //   }
  // }, [isSuccess, isError]);
  return (
    <div>
      <div className="w-full h-full bg-hero-lg bg-cover">
        <section className="justify-center flex py-20">
          <div className="flex flex-col gap-y-3 text-emc-white">
            <p className="font-bold text-5xl text-center ">Audio</p>
            <p>It's modular and designed to last</p>
          </div>
        </section>
        <section className="flex flex-col gap-y-3 mt-16">
          <form
            className="flex-col flex gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <div className="w-5/6 flex flex-row gap-x-3 bg-emc-white rounded-3 mx-auto">
              <img src={email} alt="" className="mx-2" />
              <input
                className="py-2 pr-6 border-none bg-transparent"
                placeholder="Email"
                {...register("email", { required: true })}
                autocomplete="email"
                required
              />
            </div>
            <div className="w-5/6 flex flex-row gap-x-3 bg-emc-white rounded-3 mx-auto">
              <img src={lock} alt="" className="mx-2" />
              <input
                className="py-2 pr-6 border-none bg-transparent"
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
                autocomplete="password"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-emc-green rounded-xl text-center w-5/6 py-2 text-white font-bold"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>
        <section className="flex flex-col gap-y-3 pb-24 pt-10">
          <div className="flex flex-row gap-x-3 justify-center">
            <img src={apple} alt="" />
            <img src={facebook} alt="" />
            <img src={google} alt="" />
          </div>
          <p className="text-center text-emc-white">
            If you have an account?{" "}
            <Link to="/login">
              <span className="text-emc-green">Sign In here</span>
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Register;
