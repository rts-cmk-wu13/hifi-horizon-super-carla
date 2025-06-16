import { useEffect, useState } from "react"

export default function Search({ searchType, onSearchResults }) {

    const [originalProducts, setOriginalProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [errorKeyWord, setErrorKeyWord] = useState(null)
    const [search, setSearch] = useState("")

    const url = "http://localhost:4000"
    useEffect(() => {
        fetch(`${url}/products`)
            .then(respons => { return respons.json() })
            .then(productsData => {
                setOriginalProducts(productsData)
                setFilteredProducts(productsData)
            })
    }, [])

    useEffect(() => {

        if (originalProducts) {
            const filterd = originalProducts.filter(item => {
                if (searchType.length > 0) {
                    return searchType.some((keyWord) => {
                        setErrorKeyWord(null)
                        let searcResult = item[keyWord.toLowerCase()].toString().toLowerCase();
                        return searcResult.includes(search);
                    });
                }
                else {
                    // console.log("HUSK AT ANGIVE NØGLEORD SOM PARAMETER TIL Search Componentet");
                    setErrorKeyWord("HUSK AT ANGIVE NØGLEORD SOM PARAMETER TIL Search Componentet")
                }
            }
            )
            setFilteredProducts(filterd)
            // )
        }
    }, [search])

    return (
        <section className="search-section">
            {errorKeyWord &&
                <p>{errorKeyWord}</p>

            }
            {/* <label htmlFor="brands">Søg efter {`${searchType}`}</label> */}
            <input type="text" id="brands" name="brands" placeholder="search product.." onChange={(element) => {
                setSearch(element.target.value.toLowerCase())
            }} />

            <ul>
                {filteredProducts && filteredProducts.map((product) => {
                    return <li key={product.model}>
                        <h2>brand:{product.brand}</h2>
                        <ul>
                            <li>model {product.model}</li>
                            <li>type {product.type}</li>
                            <li>power_output {product.power_output}</li>
                            <li>power_output {product.power_output}</li>
                        </ul>
                    </li>
                })}
            </ul>
        </section>
    )
}
