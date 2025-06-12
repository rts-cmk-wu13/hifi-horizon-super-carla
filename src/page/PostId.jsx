import { useParams, useSearchParams } from "react-router";
import { useEffect } from "react";

export default function PostId() {
    const { id } = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    // useEffect(() => {
    //     setSearchParams({ id: "23" });
    // }, [setSearchParams]);

    return (
        <section>
            <h2>Post</h2>
            <h3> useParams ID: {id}</h3>
            <h3>Current filter: {searchParams.get("id")}</h3>
        </section>
    );
}
