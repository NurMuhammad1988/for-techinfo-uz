import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5001/blogs")
            .then((res) => res.json())
            .then((data) => setPopularBlogs(data.slice(0, 15)));
            //blogsdata.jsondagi boshidagi 15ta postni ko'rsatish pastda slice metodi bilan o'zgartirildi boshidagi 5 ta post deb 
    }, []);

    return (
        <div>
            <div>
                <h3 className="text-2xl  font-semibold px-4">Letest Blogs</h3>
                <div>
                    {popularBlogs.slice(0 , 5).map((blog) => (
                        <div className="my-5 border-b-2 border-spacing-2 px-4" key={blog.id}>
                            <h4 className="font-medium mb-2 hover:text-blue-700 cursor-pointer">{blog.title}</h4>
                            <Link
                                to="/"
                                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1  "
                            >
                                Read more <FaArrowRight className="mt-1 ml-2 " />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

{/* popular blogs */}


            <div>
                <h3 className="text-2xl  font-semibold px-4 mt-20">Popular Blogs</h3>
                <div>
                    {popularBlogs.slice(6 , 10).map((blog) => (
                        <div className="my-5 border-b-2 border-spacing-2 px-4" key={blog.id}>
                            <h4 className="font-medium mb-2 hover:text-blue-700 cursor-pointer">{blog.title}</h4>
                            <Link
                                to="/"
                                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1  "
                            >
                                Read more <FaArrowRight className="mt-1 ml-2 " />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
