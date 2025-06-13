import { NavLink } from "react-router";

export default function Navaiagtion() {

    return (
        <>
            <nav className="navigation">
                <ul>
                    <li><NavLink to={"/"} >Home</NavLink></li>
                    <li><NavLink to={"/about"}>Aboute</NavLink></li>
                    {/* <li><NavLink to={"/post/12"} >Post</NavLink></li> */}
                </ul>
            </nav>
        </>
    )
}
