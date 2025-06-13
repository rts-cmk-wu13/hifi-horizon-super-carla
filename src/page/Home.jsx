import { useContext, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"


export default function Home() {
    const { user, setUser } = useContext(GlobalContext)

    return (

        <section>
            <h1>Velkommen  {user && user}</h1>
            <button onClick={() => {
                setUser("Steen")
            }}>Tilføj bruger navn</button>
        </section>
    )
}
