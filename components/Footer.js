import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-row justify-around bg-[#1B283A] text-gray-300 py-4">
            <p>Copyright © 2025 AutoShoppa. All rights reserved</p>
            <Link href={"#"} className="cursor-pointer text-red-400">
                Go to Top
            </Link>
        </div>
    );
}