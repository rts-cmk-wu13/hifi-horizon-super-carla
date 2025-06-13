import { useParams, useSearchParams } from "react-router";

export default function ProductDetails() {
    const { id } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    // useEffect(() => {
    //     setSearchParams({ id: "23" });
    // }, [setSearchParams]);

    return (
        <section>
            <h2>ProductDetails</h2>
            <h3> useParams ID: {id}</h3>
            <h3>Current filter: {searchParams.get("id")}</h3>
        </section>
    );
}
