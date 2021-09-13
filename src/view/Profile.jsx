import React, {useState, useEffect} from "react";
import back from "../assets/svg/back.svg";
import picture from "../assets/svg/picture.svg";
import { Link } from "react-router-dom";
import Axios from "../utils/AxiosWrapper"

function Profile() {
  const [email, setEmail] = useState({emailData: ""})
  const token = localStorage.getItem("token")
  console.log(token, "Cek token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "sw-access-key": "SWSCRNHTCEHIWKH5VJB4EJBZSG",
      "sw-context-token": "pc9oYPGuQnbTzBi1ePTRhGW4OgQ1w4Gc"
    },
  }
  useEffect(() => {
    Axios.post("/account/customer", {}, config).then((res) => {
      console.log(res);
      setEmail({emailData: res.data.email})
    }).then((err) => {
      console.log(err);
    })
  },[])
  const {emailData} = email
  console.log(emailData, "cek email");
  
  return (
    <div className="container bg-emc-white">
      <section className="my-3">
        <div className="flex flex-row my-3 gap-x-24">
          <Link to="/">
            <img src={back} alt="" />
          </Link>

          <p className="font-bold text-sm mt-1 ">Profile</p>
        </div>
      </section>
      <section>
        <div className="flex flex-row gap-x-5 my-5">
          <img src={picture} alt="" className="h-14 w-14" />
          <div className="flex flex-col gap-y-1">
            <p>Andrea Hirata</p>
            <p className="text-emc-gray text-sm">{emailData}</p>
          </div>
        </div>
      </section>
      <div className="border border-emc-background my-3" />

      <section>
        <div className="flex flex-col mx-2">
          <p className="text-emc-gray text-xs mb-3">General</p>
          <div className="flex-flex-col gap-y-2 text-sm">
            <p>Edit Profile</p>
            <div className="border border-emc-background my-3" />
            <p>Notifications</p>
            <div className="border border-emc-background my-3" />
            <p>Wishlist</p>
            <div className="border border-emc-background my-3" />
          </div>
        </div>
        <div className="flex flex-col mx-2">
          <p className="text-emc-gray text-xs mb-3">Legal</p>
          <div className="flex-flex-col gap-y-2 text-sm">
            <p>Terms of Use</p>
            <div className="border border-emc-background my-3" />
            <p>Privacy Policy</p>
            <div className="border border-emc-background my-3" />
          </div>
        </div>
        <div className="flex flex-col mx-2">
          <p className="text-emc-gray text-xs mb-3">Personal</p>
          <div className="flex-flex-col gap-y-2 text-sm">
            <p>Report a Bug</p>
            <div className="border border-emc-background my-3" />
            <p>Logout</p>
            <div className="border border-emc-background my-3" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
