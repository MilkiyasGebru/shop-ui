import {BiCart} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import {useCartContext} from "@/hooks/useCartContext";


export default function Product({product}) {

    const context = useCartContext()
    const handleAddProduct = () => {

        context.dispatch({
            type:"ADD_PRODUCT",
            payload:{
                product_name: product.product_name,
                price: product.price
            }
        })

    }

    return (
        <div className="w-[250px]">
            <div className="flex flex-col p-4 w-full border border-gray-100 bg-white rounded-t-md ">
                <Image src={product.image} alt="Test Image" width={150} height={50} className="self-center aspect-square border-b" />

                <div className="flex flex-col w-full border-t border-gray-100">
                    <p className="font-light text-gray-200 ">{product.product_name}</p>
                    <p className="font-semibold">{product.product_description}</p>
                    <p className="text-xl text-orange-300">${product.price}</p>
                </div>
            </div>
            <div className="flex items-center justify-between text-white bg-[#1B283A] w-full py-2 px-3 rounded-b-md hover:bg-yellow-400">
                <button className="w-fit" onClick={handleAddProduct}>
                    Add to cart
                </button>
                <Link href="https://google.com" className="text-xl">
                    <BiCart/>
                </Link>
            </div>
        </div>
    )
}
