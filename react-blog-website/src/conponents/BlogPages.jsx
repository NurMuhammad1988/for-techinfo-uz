import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

const BlogPages = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageaSize = 12; //blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5001/blogs?page=${currentPage}$limit${pageaSize}`;

            // filter by catigoryes
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setBlogs(data);
        }
        fetchBlogs();
    }, [currentPage, pageaSize, selectedCategory]);

    //page changing btn
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    };
    // console.log(blogs);

    return (
        <div>
            {/* catigory section */}
            <div>Page Caticory</div>

            {/* blogCrds section */}
            <div>
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageaSize={pageaSize} />
            </div>

            {/* pagination section */}
            <div>Pagination</div>
        </div>
    );
};

export default BlogPages;
