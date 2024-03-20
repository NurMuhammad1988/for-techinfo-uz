import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 ">
                <div className="grid mb-8 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                        {/* category 1*/}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">
                                Category
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        News
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        World
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Games
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        References
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* category 2*/}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">
                                Apples
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Web
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        eCommerce
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Business
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Entertainment
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Portfolio
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* category 3*/}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">
                                Cherry
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Media
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Brochure
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Nonprofit
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Education
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* category 4*/}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">
                                Business
                            </p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Infopreneur
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Personal
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Wikings
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Forum
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* subscription*/}
                    <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                        <p className="font-medium tracking-wide text-gray-300">
                            Subscribe for updates
                        </p>

                        <form className="mt-4 flex flex-col md:flex-row">
                            <input
                                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:bg-purple-400 focus:outline-none"
                                type="email"
                                name="email"
                                id="email"
                            />
                            <button
                                className="inline-flex items-center  justify-center h-12 px-6  font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="mt-4 text-sm text-gray-500 ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Assumenda deleniti magni molestiae. Deleniti
                            voluptatum hic nihil esse id voluptate voluptates
                            natus? Libero voluptate accusamus nisi sit
                            praesentium!
                        </p>

                        {/* <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Infopreneur
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Personal
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Wiki
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Forum
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                                        href="/"
                                    >
                                        Projects
                                    </a>
                                </li>
                            </ul> */}
                    </div>
                </div>

                <div className="flex flex-col justify-between pt-8 pb-10 border-t border-gray-800 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        © Copyriht 2024 | All right resereved.
                    </p>

                    <div className="flex items-center mt-4 space-x-4 sm:mt-0    ">
                        <a
                            className="text-gray-500 transition-all duration-300 hover:text-orange-500 "
                            href=""
                        >
                            <BsTwitterX className="h-6 w-6" />
                        </a>

                        <a
                            className="text-gray-500 transition-all duration-300 hover:text-orange-500 "
                            href=""
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>

                        <a
                            className="text-gray-500 transition-all duration-300 hover:text-orange-500 "
                            href=""
                        >
                            <FaFacebook className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
