import BrandDetails from "./Details/BrandDetail";
import CategoryDetails from "./Details/CategoryDetail";

export default function Filters({setBrands, setCategories,categories, brands}) {
    return (
        <div className="flex flex-col">

            <form className="flex flex-row px-10  gap-16">
                <div className="flex flex-col gap-4 border-1 py-10 px-10 rounded-md">
                    <div className="flex flex-row gap-8 border-b pb-2">
                        <p className="text-3xl font-bold ">Product categories</p>
                    </div>
                    <CategoryDetails setCategories={setCategories} categories={categories} />
                    <div className="flex flex-row gap-8 border-b pb-2 ">
                        <p className="text-3xl font-bold ">Brand</p>
                    </div>
                    <BrandDetails setBrands={setBrands} brands={brands} />

                    <button
                        className="hover:bg-yellow-400 text-center py-2 rounded-md bg-black text-white
         transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
                    >
                        Apply Filter
                    </button>
                </div>
            </form>
        </div>
    );
}