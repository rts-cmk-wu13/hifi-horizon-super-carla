import { useState } from "react"
import Search from "../components/Search-02"

export default function Product() {
    // const [serchResult, setSerchResult] = useState()

    // const handleSearchResult = (filterd) => {
    //     setSerchResult(filterd)
    // }

    const [searchResults, setSearchResults] = useState([]);


    return (
        <>
            <div>
                <h1>Produktoversigt</h1>

                <Search
                    searchType={["brand", "type", "model"]}
                    onSearchResults={setSearchResults}
                />

                <section>

                    <ul>
                        {searchResults.map(product => (
                            <li key={product.model}>
                                <strong>{product.brand}</strong> - {product.model}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* <input
                type="text"
                placeholder="Søg produkt..."
                onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
            /> */}
            {/* <Search searchType={["brand", "model", "type", "price"]} onSearchResults={handleSearchResult}></Search> */}

        </>

    )
}

