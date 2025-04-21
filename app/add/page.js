"use client"
import AddProduct from "@/components/AddProduct";
import {useAuthContext} from "@/hooks/useAuthContext";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function AddProductPage() {

    const auth_context = useAuthContext()
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    console.log("Hi")
    useEffect(() => {

        const checkAuth = async () => {

            await new Promise(resolve => setTimeout(resolve, 1000)); // Example delay
            console.log("Authentication token in the context is ", auth_context.state.token)
            if (!localStorage.getItem("autoshoppa-token")) {
                router.push('/login');
            }
            setIsLoading(false);
        };

        checkAuth();
    }, [])

    if (isLoading) {
        return <div>The page is loading</div>
    }

    return (
        <>
             <AddProduct />
        </>
    )
}