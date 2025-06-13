import { useEffect, useState } from "react"

export default function Product() {

    const [procutsData, setProductsData] = useState([])
    const url = "http://localhost:4000"
    fetch(`${url}/products`)
        .then(respons => { return respons.json() })
        .then(procutsData => { setProductsData(procutsData) })

    // useEffect(() => {
    //     console.log(procutsData);

    // }, [])
    return (
        <section>
            <h1>Product</h1>
            <ul>
                {procutsData && procutsData.map((product) => {
                    return <li key={product.model}>{product.brand}</li>
                })}
            </ul>
        </section>
    )
}

