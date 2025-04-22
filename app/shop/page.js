"use client"
import Filters from "@/components/Filters";
import {useEffect, useState} from "react";
import ProductList from "@/components/ProductList";

import {IoChevronForwardOutline} from "react-icons/io5";

export default function HomePage() {

    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [year, setYear] = useState();
    const [year2, setYear2] = useState();
    const [minimum, setMinimum] = useState(0);
    const [maximum, setMaximum] = useState(100000);
    let base_url = "http://localhost:8080/api/products/"


    useEffect( () => {
        console.log("Use effect has ran", brands, categories)

        base_url += "?minimum=" + minimum + "&&maximum=" + maximum;
        if(year && year2){
            base_url += "&&year=" + year + "&&year2=" + year2;
        }
        if (categories.length > 0 && brands.length > 0) {
            base_url += "&&brands=" + brands.join(",")+"&&"+"categories=" + categories.join(",")
        }
        else if (categories.length > 0) {
            base_url += "&&categories=" + categories.join(",");
        }
        else if (brands.length > 0) {
            base_url += "&&brands=" + brands.join(",");
        }

        console.log("The base url is " + base_url);

        fetch(base_url).then((response) => {
            return response.json();
        }).then((data) => {
            setProducts(data.products);
        })
    },[brands,categories,minimum,maximum,year,year2])



    return (
        <div>
            <div
                className="flex flex-col bg-[url('https://demo2.wpopal.com/karpart/wp-content/uploads/2023/11/shop-bc.jpg')] h-75 text-center justify-center">
                <h1 className="text-5xl text-white">Shop</h1>
                <p className="flex flex-row items-center justify-center font-bold">
                    <a href="#">Home</a> <IoChevronForwardOutline/> PageShop
                </p>
            </div>
            <div className="flex gap-6 py-6 flex-col md:flex-row ">
                <Filters setBrands={setBrands} setCategories={setCategories} brands={brands} categories={categories}
                        setYear={setYear} setYear2={setYear2} setMinimum={setMinimum} setMaximum={setMaximum} />
                <ProductList products={products}/>

                {/*<PriceRange setRange={setRange}/>*/}


            </div>
        </div>
    )
}