import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    //NavItems
    const NavItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ];

    return (
        <header className="bg-black">
            <nav className="px-4 py-4">
                <a href="/" className="text-xl font-bold text-white">
                    Design <span className="text-orange-500">DK</span>
                    {/* navItems for lg devices */}
                    <ul>
                        {NavItems.map(({ path, link }) => (
                            <li>
                                <NavLink to={path}>{link}</NavLink>
                            </li>
                        ))}
                    </ul>
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
