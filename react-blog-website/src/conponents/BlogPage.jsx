import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";


const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageaSize = 12; //blogs per page // shu cod sabab asosiy sahifaga serverdan faqat 12 ta malumot chaqirildi
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
            {/* category section */}
            <div>
                <CategorySelection
                    onSelectCategory={handleCategoryChange}
                    selectedCategory={selectedCategory}
                    activeCategory={activeCategory}
                />
            </div>

            {/* blogCrds section */}
            <div className="flex flex-col lg:flex-row gap-12">
                {/* blog cards component */}
                <BlogCards
                    blogs={blogs}
                    currentPage={currentPage}
                    selectedCategory={selectedCategory}
                    pageaSize={pageaSize}
                />

                {/* sidebar component */}
                <div>
                    <SideBar />
                </div>
            </div>

            {/* pagination section */}
            <div>
                <Pagination
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                    blogs={blogs}
                    pageaSize={pageaSize}
                />
            </div>
        </div>
    );
};

export default BlogPage;
