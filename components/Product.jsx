import {BiCart} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

export default function Product() {
    return (
        <div>
            <div className="flex flex-col p-4 w-96 border border-gray-100 bg-white rounded-t-md ">
                <Image src="https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/product_24-768x768.jpg" alt="Test Image" width={150} height={50} className="self-center aspect-square" />

                <div className="flex flex-col w-full">
                    <p className="font-light text-gray-200 ">Body Parts, Parts</p>
                    <p className="font-semibold">Portable Mini 12V Automobile Inflator Air Compressor 150 PSI</p>
                    <p className="text-xl text-orange-300">$919.80</p>
                </div>
            </div>
            <div className="flex items-center justify-between text-white bg-[#1B283A] w-96 py-2 px-3 rounded-b-md hover:bg-yellow-400">
                <button className="w-fit">
                    Add to cart
                </button>
                <Link href="https://google.com" className="text-xl">
                    <BiCart/>
                </Link>
            </div>
        </div>
    )
}
