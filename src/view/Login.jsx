import React, {useState} from "react";
import background from "../assets/svg/background.svg";
import email from "../assets/svg/email.svg";
import lock from "../assets/svg/lock.svg";

function Login() {
  const [username, setUsername] = useState("")
  const [pass, setPass] = useState("")
  const validate = () => {
    return username.length > 0 && pass.length > 0
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = ("/")

  }
  return (
    <div className="w-full h-full bg-hero-lg bg-cover">
      <section className="justify-center flex py-20">
        <div className="flex flex-col gap-y-3 text-emc-white">
          <p className="font-bold text-5xl text-center ">Audio</p>
          <p>It's modular and designed to last</p>
        </div>
      </section>
      <section className="flex flex-col gap-y-3 mt-32">
        <form className="flex-col flex gap-y-3" onSubmit={handleSubmit}>
          <div className="w-5/6 flex flex-row gap-x-3 bg-emc-white rounded-3 mx-auto">
            <img src={email} alt="" className="mx-2" />
            <input
              className="py-2 pr-6 border-none bg-transparent"
              placeholder="Email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-5/6 flex flex-row gap-x-3 bg-emc-white rounded-3 mx-auto">
            <img src={lock} alt="" className="mx-2" />
            <input
              className="py-2 pr-6 border-none bg-transparent"
              placeholder="Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <section className="flex flex-col gap-y-3 pb-16 pt-10">
            <div className="flex justify-center">
              <button className="bg-emc-green rounded-xl text-center w-11/12 py-2 text-white font-bold" type="submit" disabled={!validate()}>
                Sign In
              </button>
            </div>
            <p className="text-center text-emc-white">
              Didn’t have any account?{" "}
              <span className="text-emc-green">Sign Up here</span>
            </p>
          </section>
        </form>

        <p className="text-center text-emc-white">Forgot Password</p>
      </section>
    </div>
  );
}

export default Login;
