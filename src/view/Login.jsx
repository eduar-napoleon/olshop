import React from "react";
import background from "../assets/svg/background.svg";
import email from "../assets/svg/email.svg";
import lock from "../assets/svg/lock.svg";

function Login() {
  return (
    <div>
      <section className="justify-center flex">
        <div className="flex flex-col gap-y-3">
          <p className="font-bold text-5xl text-center">Audio</p>
          <p>It's modular and designed to last</p>
        </div>
      </section>
      <section className="flex flex-col gap-y-3 my-3">
        <div className="flex justify-center items-center">
          <form className="flex-col flex gap-y-3">
            <div className="w-4/5 flex flex-row gap-x-3">
              <img src={email} alt="" />
              <input className="py-2 pr-6 border-none" placeholder="Email" />
            </div>
            <div className="w-4/5 flex flex-row gap-x-3">
              <img src={lock} alt="" />
              <input className="py-2 pr-6 border-none" placeholder="Password" />
            </div>
          </form>
        </div>
        <p className="text-center">Forgot Password</p>
      </section>
      <section className="flex flex-col gap-y-3">
        <div className="flex justify-center">
          <button className="bg-emc-green rounded-xl text-center w-11/12 py-2 text-white font-bold">
            Sign In
          </button>
         
        </div>
        <p className="text-center">
            Didn’t have any account?{" "}
            <span className="text-emc-green">Sign Up here</span>
          </p>
      </section>
    </div>
  );
}

export default Login;
