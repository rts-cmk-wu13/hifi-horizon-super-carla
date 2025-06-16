import { useState } from "react"
import Search from "../components/Search-01"

export default function Product() {
    const [serchResult, setSerchResult] = useState()

    const handleSearchResult = (filterd) => {
        setSerchResult(filterd)
    }

    return (
        <>

            {/* <input
                type="text"
                placeholder="Søg produkt..."
                onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
            /> */}
            <Search searchType={["brand", "model", "type", "price"]} onSearchResults={handleSearchResult}></Search>

        </>

    )
}

