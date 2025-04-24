"use client"

import {useState} from "react";
import Link from "next/link";
import {useAuthContext} from "@/hooks/useAuthContext";
import {useRouter} from "next/navigation";

export default function Login (){

    const context = useAuthContext()
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setIsLoading] = useState(false);


    const handleSubmitForm = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(email);
        const post_options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password
            })
        }
        const response = await fetch("http://localhost:8080/api/auth/login", post_options)
        const json_response = await response.json()
        setIsLoading(false);
        if (response.ok){

            console.log(" Response is okay and action dispatched")
            console.log("This is the json response", json_response.token)
            console.log("This is the context",context)
            context.dispatch({
                type: "LOGIN",
                payload: {
                    token: json_response.token
                },
            })
            localStorage.setItem("autoshoppa-token", JSON.stringify(json_response.token))
            // router.push("/add")
            console.log("Finished login")

        }
        else {
            alert("Login failed.")
        }
    }

    return (
        <form action="" className="p-4 border border-gray-100 rounded-md h-screen flex flex-col items-center bg-white" onSubmit={handleSubmitForm}>
            <div className="flex flex-col w-1/3">
            <h3 className="text-2xl text-center font-semibold "> Login</h3>

            <label htmlFor="email" className="text-xl mt-4">Email:</label>
            <input type="text" id="email" value={email}
                   className="border border-gray-200 px-3 py-2 outline-none rounded-md w-full"
                   onChange={(e) => setEmail(e.target.value)}/>


            <label htmlFor="password" className="mt-4 text-xl">Password:</label>
            <input type="password" id="password"
                   className="border border-gray-200 outline-none px-3 py-2 rounded-md w-full"
                   value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button disabled={false} className="px-3 py-2 rounded-md border border-gray-100 w-fit mt-4 bg-lime-200 text-gray-600 cursor-pointer self-center" onClick={handleSubmitForm}>Log In</button>
            {/*{error && <p className="py-4 text-red-300">{error}</p>}*/}
            <Link href="/add">Home</Link></div>
        </form>
    )

}