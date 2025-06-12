
import { useParams, useSearchParams } from "react-router";

export default function Post() {
  const { id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams()

  // eg. http://localhost:5174/post/?id=73

  return (
    <section>
      <h2>Post</h2>
      <h3> useParams ID: {id}</h3>
      <h3> useSearchParams ID: {searchParams.get("id")}</h3>
    </section>
  );
}
