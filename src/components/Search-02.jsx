import { useEffect, useState } from "react";

export default function Search({ searchType, onSearchResults }) {
    const [originalProducts, setOriginalProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [errorKeyWord, setErrorKeyWord] = useState(null);

    const url = "http://localhost:4000";

    useEffect(() => {
        fetch(`${url}/products`)
            .then(res => res.json())
            .then(productsData => {
                setOriginalProducts(productsData);
                onSearchResults?.(productsData); // send hele listen første gang
            });
    }, []);

    useEffect(() => {
        if (!originalProducts || originalProducts.length === 0) return;

        if (!searchType || searchType.length === 0) {
            setErrorKeyWord("HUSK AT ANGIVE NØGLEORD SOM PARAMETER TIL Search Componentet");
            onSearchResults?.([]); // ingen resultater
            return;
        }

        setErrorKeyWord(null);

        const filtered = originalProducts.filter(item =>
            searchType.some(key => {
                const value = item[key?.toLowerCase()]?.toString().toLowerCase();
                return value?.includes(search);
            })
        );

        onSearchResults?.(filtered); // 🔁 returnér filtreret data
    }, [search, originalProducts]);

    return (
        <section className="search-section">
            {errorKeyWord && <p style={{ color: "red" }}>{errorKeyWord}</p>}

            <input
                type="text"
                id="brands"
                name="brands"
                placeholder="Søg produkter..."
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
        </section>
    );
}
