import React from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech", "Gadjetlar"];

    return (
        <div className="px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
            <button
                className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}
                onClick={() => onSelectCategory(null)}
            >
                ALL
            </button>
            {/* yani agar all buttoni activecategory bo'lsa class bo'masin agar activegategory bo'lsa active-button clasi qo'shilsin */}
            {categories.map((category) => (
                <button
                    onClick={() => onSelectCategory(category)}
                    className={`mr-2 space-x-16 ${
                        activeCategory === category ? "active-button" : ""
                    }`}
                    key={category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategorySelection;
