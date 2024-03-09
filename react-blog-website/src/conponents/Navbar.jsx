import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaBars,
    FaDribbble,
    FaFacebook,
    FaTwitter,
    FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    //NavItems
    const NavItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ];
    //yuqoridagi navLinks o'zgaruvchini ichiga path va link bilan srcni ichidagi main.jsx failida roterga o'ralgan link'arni chaqirvoldik va pastda map qilib lini ichiga kerakli joyga qo'ydik mapni ichida NavLink tegi bor bu NavLink tegi rect router domni linklar uchun mahsus tegi yani pathlar va linklar shu tegni ichiga o'ralishi kerak NavLink tegini o'zini mahsus stylelari bor linkga moslashgan shunda browser taniydi buni link ekanligini
    return (
        <header className="bg-black text-white fixed top-0 left-0 right-0">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-white">
                    Design <span className="text-orange-500">DK</span>
                </a>

                {/* navItems for lg devices */}
                <ul className="md:flex gap-12 text-lg hidden">
                    {NavItems.map(({ path, link }) => (
                        <li key={path} className="text-white">
                            <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{link}</NavLink>
                        </li>
                    ))}
                </ul>
                {/* menu icons */}
                <div className="text-white lg:flex gap-4 items-center hidden">
                    <a className="hover:text-orange-500" href="/">
                        <FaFacebook />
                    </a>
                    <a className="hover:text-orange-500" href="/">
                        <FaDribbble />
                    </a>
                    <a className="hover:text-orange-500" href="/">
                        <FaTwitter />
                    </a>
                    <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
                        Log in
                    </button>
                </div>

                {/* mobile mune btn display mobile screen */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <FaXmark className="w-5 h-5" />
                        ) : (
                            <FaBars className="w-5 h-5" />
                        )}
                        {/* onclik bolganda isopenmenu fals bo'lsa faxmark tru bo'lsa fabars */}
                    </button>
                </div>
            </nav>
            {/* menu items only for mobile */}
            <div>
                <ul
                    className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
                        isMenuOpen
                            ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
                            : "hidden"
                    }`}
                >
                    {/* ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"  yani togleni if elsi shu kod bilan ochilib yopiladi ul ni ichidagi menu yani faqat mobil formatda*/}
                    {NavItems.map(({ path, link }) => (
                        <li key={path} className="text-black">
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
