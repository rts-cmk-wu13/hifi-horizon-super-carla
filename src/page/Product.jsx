import { useEffect, useState } from "react"

export default function Product() {



    const [procutsData, setProductsData] = useState([])
    const url = "http://localhost:4000"
    useEffect(() => {
        fetch(`${url}/products`)
            .then(respons => { return respons.json() })
            .then(procutsData => { setProductsData(procutsData) })

    }, [])


    return (
        <section>
            <h1>Product</h1>
            <ul>
                {procutsData && procutsData.map((product) => {
                    return <li key={product.model}>
                        <h2>brand:{product.brand}</h2>
                        <ul>
                            <li>Pris {product.price_dkk}</li>
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

