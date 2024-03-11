import React from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

    return (
        <div>
            <button>ALL</button>
            {categories.map((catecory) => (
                <button
                    onClick={() => onSelectCategory(catecory)}
                    className={`mr-2 space-x-16 ${
                        activeCategory === catecory ? "active-button" : ""
                    }`}
                    key={catecory}
                >
                    {catecory}
                </button>
            ))}
        </div>
    );
};

export default CategorySelection;
