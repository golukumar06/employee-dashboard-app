import React, { useState } from "react";
import SignUp from "./SignUp";

const Login = ({handleLogin}) => {
     
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const[isSubmit,setIsSubmit] = useState(false)
    const SubmitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }

    if(isSubmit){
        return <SignUp/>
    }
    return (
        <>
        <div className="flex h-screen w-screen items-center justify-center">
            <div className=" border-2 p-15 border-emerald-600">
                <form 
                  onSubmit= {SubmitHandler}
                 className="flex flex-col items-center justify-center">
                   
                    <input 
                     required
                     value={email}
                     onChange={(e)=>{
                        setEmail(e.target.value)
                     }}
                    className="placeholder:text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full px-5 py-3 text-xl " type="email" placeholder="Enter your email" />

                    <input 
                     required
                     value={password}
                     onChange={(e)=>{
                        setPassword(e.target.value)
                     }}
                    className="placeholder:text-white outline-none bg-transparent border-2 mt-4  border-emerald-600 rounded-full px-5 py-3 text-xl " type="password" placeholder="Enter your password" />
                    <button 
                     className="placeholder:text-white outline-none border-none bg-emerald-600 mt-4 rounded-full px-5 py-2 text-xl ">Log in</button>
                <button onClick={()=>setIsSubmit(true)} className="bg-pink-500 mt-5 px-5 py-2 rounded-full text-sm ">Sign Up</button>
                </form>


            </div>

        </div>
        </>
    )
}

export default Login