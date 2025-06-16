import { useEffect, useState } from "react"

export default function Product() {
    const [originalProducts, setOriginalProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
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
            setFilteredProducts(
                originalProducts.filter(item => {
                    return item.brand.toLowerCase().includes(search) || item.model.toLowerCase().includes(search)
                }
                ))
        }
    }, [search])


    return (
        <section>
            <h1>Product</h1>
            <label htmlFor="brands">Søg efter Brands</label>
            <input type="text" id="brands" name="brands" onChange={(element) => {
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

