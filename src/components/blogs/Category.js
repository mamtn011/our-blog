import React from "react";

const Category = ({ onSelectCategory, selectedCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div className="mx-4 mb-8 justify-center gap-4 md:justify-start md:space-x-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
      <button
        onClick={() => onSelectCategory(null)}
        className={`mr-4 lg:ml-6 ${!selectedCategory ? "active" : ""}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`mr-2 space-x-16 ${
            selectedCategory === category ? "active" : ""
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
