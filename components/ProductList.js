import Product from "@/components/Product";

export default function ProductList({products}) {
    return (
        <div className="flex gap-6 flex-wrap px-6">
            {products.map((product) => {
                return <Product key={product._id} product_name={product.product_name} price={product.price}  />
            })}
        </div>
    )
}