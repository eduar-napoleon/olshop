import React from 'react'
import background from "../assets/svg/background.svg"
import email from "../assets/svg/email.svg"
import lock from "../assets/svg/lock.svg"

function Login() {
    return (
        <div >
            <img src={background} alt="" className="absolute inset-0 bg-cover bg-center z-0"/>
            <div className="flex-col ">
                <form>
                    <input 
                    className=""
                    placeholder="Email"
                    />
                    <input 
                    className=""
                    placeholder="Password"
                    />
                </form>


            </div>
            
        </div>
    )
}

export default Login
