'use client'
import { FaCartShopping } from "react-icons/fa6";
import { GiGears } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
import {useCartContext} from "@/hooks/useCartContext";
import Link from "next/link";



export default function Navbar() {

    const context = useCartContext()
    return (
        <div className="flex flex-row justify-around  mt-2" id="navbar">
            <div
                className="hover:text-yellow-400 text-6xl
       transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
            >
                <GiGears />
            </div>

            <div className="flex flex-row gap-6 mt-4">
                <Link
                    href="/"
                    className="hover:text-yellow-400
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                >
                    Home
                </Link>
                <Link
                    href="/shop"
                    className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                >
                    Shop
                </Link>
                <a
                    href=""
                    className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                >
                    Track Order
                </a>
                <Link
                    href="/contact"
                    className="hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                >
                    Contact
                </Link>
            </div>

            <div className="flex flex-row gap-6 mt-4">
                <a
                    href="#"
                    className="hover:text-yellow-400 flex flex-row gap-2
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                >
                    <IoPersonCircleSharp className="text-2xl" />
                    Login/Register
                </a>
                <a
                    href="#"
                    className="flex flex-row hover:text-yellow-400
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                >
                    <FaCartShopping className="text-2xl" />
                    <p>{context.state.size}</p>
                </a>
            </div>
        </div>
    );
}