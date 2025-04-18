"use client"
import {useCartContext} from "@/hooks/useCartContext";

export default function CheckOut() {

    const context = useCartContext()
    console.log(context)
    let sub_total = 0
    {Array.from(context.state).map(([key, value]) => {
        sub_total += value[1]
        console.log(key, value, "iterator")
    })

    }



    const handleDelete = (product_name)=>{
        context.dispatch({
            type:"REMOVE_PRODUCT",
            payload:{
                product_name,
            }
        })
    }

    const handleSubmit = async ()=>{

        const products = {};
        for (const [key, value] of context.state) {
            products[key] = value;
        }

        const post_options = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(products)
        }
        const response = await fetch("http://localhost:8080/api/orders/create-checkout-session", post_options)
        const json_response = await response.json()
        window.location.href = json_response.url

    }

    return (
        <div className="flex flex-col h-screen items-center gap-8 py-8 ">
            <div className="flex flex-col w-full items-center gap-3">
                <h1 className="text-3xl font-semibold">Shopping Cart</h1>

                {Array.from(context.state).map(([key, value]) => (
                    <div key={key}
                         className="flex flex-col py-2 items-center justify-between rounded-md bg-white  border border-gray-300 w-1/3 ">
                        <div className="w-full px-5">
                            <div className="flex flex-row justify-between">
                                <p className="font-semibold">{key} </p>
                                <button className="cursor-pointer py-1 px-2 text-red-600"
                                        onClick={() => handleDelete(key)}>x
                                </button>
                            </div>
                            <p className="flex flex-col justify-center">
                                {value[0]} * {value[1]} = ${value[0] * value[1]}{" "}
                                <br/>
                            </p>
                        </div>
                    </div>

                ))}
                <div className="flex justify-between font-semibold w-1/3">
                    <span>Subtotal:</span>
                    <span>${sub_total}</span>
                </div>
                <button
                    className="bg-yellow-400 w-1/3 font-semibold py-2 px-3
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 rounded-md"
                    onClick={handleSubmit}
                >
                    CheckOut
                </button>
            </div>

        </div>
    );
}
