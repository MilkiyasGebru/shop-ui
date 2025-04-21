'use client'
import {useState} from "react";
import {useAuthContext} from "@/hooks/useAuthContext";
import {router} from "next/client";
import {useRouter} from "next/navigation";

export default function register(){
    const context = useAuthContext();
    const router = useRouter();
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = async(e) => {
        e.preventDefault();
        const post_options = {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username, email, password
            })
        }
        const response = await fetch("http://localhost:8080/api/auth/register", post_options)
        const json_response = await response.json();
        if(response.ok){
            context.dispatch({
                type:'LOGIN',
                payload: json_response.token,
            })
            localStorage.setItem("autoshoppa-token", json_response.token);
            router.push("/shop")
            console.log(json_response.token)
        }


    }

    return (
        <div>
        <form action="" className="p-4 border border-gray-100 rounded-md flex flex-col w-3/5 xl:w-1/3 bg-white" onSubmit={handleChange}>
            <h3 className="text-2xl text-center font-semibold "> Register</h3>

            <label htmlFor="username" className="text-xl mt-4">username:</label>
            <input type="text" id="username" value={username}
                   onChange={(e)=>setUser(e.target.value)}
                   className="border border-gray-200 px-3 py-2 outline-none rounded-md w-2/3"/>

            <label htmlFor="email" className="text-xl mt-4">Email:</label>
            <input type="text" id="email" value={email}
                   className="border border-gray-200 px-3 py-2 outline-none rounded-md w-2/3"
                   onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password" className="mt-4 text-xl">Password:</label>
            <input type="password" id="password"
                   className="border border-gray-200 outline-none px-3 py-2 rounded-md w-2/3"
                   value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button disabled={false} className="px-3 py-2 rounded-md border border-gray-100 w-fit mt-4 bg-lime-200 text-gray-600 cursor-pointer" onClick={handleChange}>Register</button>
        </form>
        </div>
    )
}