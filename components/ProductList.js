import Product from "@/components/Product";

export default function ProductList({products, title}) {
    return (
        <div className="flex gap-2 flex-wrap">
            {products.map((product) => {
                return <Product key={product._id + title } product_name={product.product_name} price={product.price}  />
            })}
        </div>
    )
}