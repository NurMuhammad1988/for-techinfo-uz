import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, selectedCategory, pageaSize }) => {
    const filtredBlogs = blogs
        .filter(
            (blogs) => !selectedCategory || blogs.catecory === selectedCategory
        )
        .slice((currentPage - 1) * pageaSize, currentPage * pageaSize);
    console.log(filtredBlogs);
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
            {filtredBlogs.map((blog) => (
                <Link
                    className="p-5 shadow-lg rounded cursor-pointer hover:bg-slate-200"
                    key={blog.id}
                >
                    <div>
                        <img
                            className="w-full rounded"
                            src={blog.image}
                            alt=""
                        />
                    </div>
                    <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
                        {blog.title}
                    </h3>
                    <p className="mb-2  text-gray-600">
                        <FaUser className="inline-flex items-center mr-2" />
                        {blog.author}
                    </p>
                    <p className="text-sm text-gray-500 ">
                        Published: {blog.published_date}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default BlogCards;

// blogs blogpages blogcards Paginationda qilingan ishlarni yahshilab tushunib coment yozib chiqish shart!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
