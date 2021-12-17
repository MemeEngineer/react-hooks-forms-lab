import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [letters, setLetters]= useState('');
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleLetters(event){
    setLetters(event.target.value);
    console.log(event.target.value);
  }
  
  const itemsToDis = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  const nameToDisplay = itemsToDis.filter((item) => {
    if (letters === '' ) return true;

    return item.name.toLowerCase().includes(letters.toLowerCase());
  });

  


  const itemsToDisplay = nameToDisplay;

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleLetters} search={letters} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
