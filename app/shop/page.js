"use client"
import FiltersColumn from "@/components/Filters";
import {useEffect, useState} from "react";
import ProductList from "@/components/ProductList";
import {IoChevronForwardOutline} from "react-icons/io5";

export default function HomePage() {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("http://localhost:8080/api/products/latest").then((response) => {
            return response.json();
        }).then((data) => {
            setProducts(data.products);
        })
    },[])




    return (
        <div>
            <div
                className="flex flex-col bg-[url('https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/shop-bc.jpg')] h-75 text-center justify-center">
                <h1 className="text-5xl text-white">Shop</h1>
                <p className="flex flex-row items-center justify-center font-bold">
                    <a href="#">Home</a> <IoChevronForwardOutline/> PageShop
                </p>
            </div>
            <div className="flex gap-6 py-6">
                <FiltersColumn/>
                <ProductList products={products}/>

            </div>
        </div>
    )
}