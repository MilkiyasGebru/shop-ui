import SearchBar from "@/components/SearchBar";

export default function Shop_Layout({children}) {
    return (
        <>
            <SearchBar />
            {children}
        </>
    )
}