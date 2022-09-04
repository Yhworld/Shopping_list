import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/items")
    .then((resp) => resp.json())
    .then((items) => setItems(items));
  }, []);

  function handleDeleteItem(deleteditem) {
    const updatedItems = items.filter((item) => item.id !== deleteditem.id);
    setItems(updatedItems);
  }

  function handleUpdateItem(updatedItem) {
    console.log("I ShoppingCart:", updatedItem);
  }

  function handleAddItem(newItem) {
    setItems([...items,newItem]);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onAddItem={handleAddItem} />
      <Filter
        category={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} onUpdateItem={handleUpdateItem} onDeleteItem={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;