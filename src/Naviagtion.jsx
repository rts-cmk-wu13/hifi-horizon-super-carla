import { NavLink } from "react-router";

export default function Navaiagtion() {

    return (
        <>
            <nav className="navigation">
                <ul>
                    <li><NavLink to={"/"} >Home</NavLink></li>
                    <li><NavLink to={"/product"}>Product</NavLink></li>
                    <li><NavLink to={"/product-details"}>Product details</NavLink></li>

                </ul>
            </nav>
        </>
    )
}
