"use client"
import CategoryDetails from "./Details/CategoryDetail";
import BrandDetails from "./Details/BrandDetail";
import {useState} from "react";

export default function AddProduct() {
    const [product_name, setProductName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const[imageview, setImageview] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        URL.revokeObjectURL(setImageview())
        const formData = new FormData()
        formData.append('product_name', product_name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('brand', brand);
        formData.append('category', category);
        formData.append('imageview', imageview);
        if (selectedFile) {
            formData.append('photo', selectedFile);
        }

        const post_options = {
            method :"POST",
            body: formData
        }
      await fetch("http://localhost:8080/api/products/add", post_options)
    }
    const handleFileChange = async (e) =>{
        setSelectedFile(e.target.files[0]);
        setImageview(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <form action="" method="POST" encType={"multipart/form-data"}  onSubmit={handleSubmit}>
            <div className=" px-8 py-10 flex items-center justify-center">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-5">
                        <label
                            className="block text-xl font-semibold text-gray-900 dark:text-white"
                            htmlFor="photo"
                        >
                            Upload Photo
                        </label>
                        <input
                            className="w-50 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 px-2 py-1"
                            id="photo"
                            type="file"
                            name="photo"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="flex gap-4">
                        <span className="font-semibold text-xl">Product Name:</span>
                        <input
                            type="text"
                            className="border-1 w-60 px-2 rounded-md border-gray-400"
                            placeholder="Product Name"
                            value={product_name}
                            onChange={(e)=>{setProductName(e.target.value)}}
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <span className="font-semibold text-xl">Product Price:</span>
                        <input
                            type="number"
                            name=""
                            id="price"
                            className="border-1 w-60 px-2 border-gray-400 rounded-md"
                            placeholder="Price in Birr"
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                        />
                    </div>
                    <div className="self-center w-full">
                          <textarea
                              name=""
                              id="descrption"
                              className="border-1 w-[100%] h-32 px-2 rounded-md "
                              placeholder="Enter Product Descrption"
                              value={description}
                              onChange={(e)=>{setDescription(e.target.value)}}

                          ></textarea>
                    </div>
                    <div className="flex flex-row self-center">
                        <div className="flex flex-col gap-2">
                            <span className="text-lg font-semibold">Categories</span>
                            <CategoryDetails inputType="radio" className="items-center" setCategory={setCategory}/>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-lg font-semibold">Brands</span>
                            <BrandDetails inputType="radio" setBrand={setBrand} />
                        </div>

                    </div>

                    <img src={imageview}></img>

                    <input
                        type="submit"
                        value="Submit"
                        className="border-1 w-20 rounded-md px-2 py-1 font-semibold border-gray-400 self-center"
                        placeholder="Enter your product description"
                        onClick={handleSubmit}
                    />
                </div>
            </div>

        </form>
    );
}