"use client"
import {useCartContext} from "@/hooks/useCartContext";

export default function CheckOut() {

    const context = useCartContext()
    console.log(context)
    {Array.from(context.state).map(([key, value]) => (
      console.log(key, value, "iterator")
    ))}

    const items = [
        {
            product_name: "something",
            freqency: 10,
            price: 200,
        },
        {
            product_name: "something",
            freqency: 10,
            price: 200,
        },
    ];
    return (
        <div className="flex flex-col h-screen items-center gap-8 py-8 ">
            <div className="flex flex-col w-full items-center gap-3">
                <h1 className="text-3xl font-semibold">Shopping Cart</h1>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col py-2 items-center justify-between rounded-md bg-white  border border-gray-300 w-1/3 "
                    >
                        <div className="w-full px-5">
                            <div className="flex flex-row justify-between">
                                <p className="font-semibold">{item.product_name} </p>
                                <button className="cursor-pointer py-1 px-2 text-red-600">x</button>
                            </div>
                            <p className="flex flex-col justify-center">
                                {item.freqency} * {item.price}   = ${item.price * item.freqency}{" "}
                                <br />
                            </p>
                        </div>
                    </div>
                ))}
                {Array.from(context.state).map(([key, value]) => (
                    <div key={key}>
                        <p>{key}</p>
                        <p>Hi There</p>
                    </div>
                ))}
            </div>
            <button
                className="bg-yellow-400 w-1/3 font-semibold py-2 px-3
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1 rounded-md"
            >
                CheckOut
            </button>
        </div>
    );
}
