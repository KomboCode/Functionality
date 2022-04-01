import React from 'react';

const Categories = ({ toggle, allCategories, handleCategories }) => {
    return (
        <select
          className={ toggle ? "toggle-dropdown" : "drop-down"}
          onChange={(e) => handleCategories(e.target.value)}
        >
            {allCategories.map((category, index) => {
                return (
                    <option
                      key={index}
                      value={category}
                    >{category}</option>
                )
            })}
        </select>
    )
}

export default Categories;