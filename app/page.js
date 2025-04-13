import Product from "@/components/Product";
import SearchBar from "@/components/SearchBar";
import Order from "@/components/Order";

export default function Home() {
  return (
      <div className="bg-gray-100">
        <Product />
        <SearchBar />
        <Order />
      </div>
  );
}
