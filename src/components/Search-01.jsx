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
            setFilteredProducts(filterd);
            onSearchResults?.(filterd)
        }
    }, [search])

    return (
        <section className="search-section">
            {errorKeyWord &&
                <p>{errorKeyWord}</p>

            }
            <input type="text" id="brands" name="brands" placeholder="search product.." onChange={(element) => {
                setSearch(element.target.value.toLowerCase())
            }} />


        </section>
    )
}
