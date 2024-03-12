import React from "react";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

    return (
        <div>
            <button onClick={() => onSelectCategory(null)}>ALL</button>
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
