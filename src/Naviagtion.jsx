import { NavLink } from "react-router";

export default function Navaiagtion() {

    return (
        <>
            <nav className="navigation">
                <ul className="navigation__ul">
                    <li><NavLink to={"/"} ><span>HI</span><span>FI</span></NavLink></li>
                    <li><NavLink to={"/product"}>Product</NavLink>
                        <ul className="navigation__sub">
                            <li><NavLink to={"/product-details"}>Product details</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={"/"}>About os</NavLink></li>
                    <li><NavLink to={"/"}>Contact os</NavLink></li>
                </ul>
                <ul className="navigation__ul">
                    <li></li>
                </ul>
            </nav>
        </>
    )
}
