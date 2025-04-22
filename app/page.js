"use client"
import Product from "@/components/Product";
import SearchBar from "@/components/SearchBar";
import Order from "@/components/Order";
import {useEffect, useState} from "react";
import ProductList from "@/components/ProductList";
import ProductExplore from "@/components/ProductExplore";
import Track from "@/components/TrackMyOrder";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {


    const [load, setLoad] = useState(true);


    const [latest_products, setLatestProducts] = useState([]);
    const [trending_products, setTrendingProducts] = useState([]);
    useEffect( () => {
        fetch("http://localhost:8080/api/products/latest").then((response) => {
            return response.json();
        }).then((data) => {
            setLatestProducts(data.products);
            setLoad(false);
        })
    },[])

    useEffect( () => {
        fetch("http://localhost:8080/api/products/trending").then((response) => {
            return response.json();

        }).then((data) => {
            setTrendingProducts(data.products);
            setLoad(false);
        })
    },[])

      return (<>
              { !load &&
        <div className="bg-gray-100 p-6">
            { latest_products.length > 0 &&  <h1 className="text-4xl border-b-4 font-bold mb-2">Latest Products </h1>}
            <ProductList products={latest_products} title="latest" />
            { trending_products.length > 0 &&  <h1 className="text-4xl border-b-4 font-bold mt-10 mb-3">Trending Products </h1>}
            <ProductList products={trending_products} title="trending"  />
            <ProductExplore />
            <Track />
            {/*<SearchBar />*/}
            {/*<Order />*/}
        </div>}
              {load && <LoadingScreen/>}
          </>
      );
}
