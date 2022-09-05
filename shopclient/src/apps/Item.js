import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {

  function handleAddToCartClick() {
    fetch("http://localhost:9292/items", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isincart: !item.isincart,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:9292/items/${item.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDeleteItem(item));
  }

  return (
    <li className={item.isincart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isincart ? "remove" : "add"} onClick={handleAddToCartClick}>
        {item.isincart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove">Delete</button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}
export default Item;