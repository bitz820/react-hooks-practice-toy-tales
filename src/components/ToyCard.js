import React from "react";

function ToyCard({toy, onDelete, onAddLike}) {
 const {name, id, image, likes, } = toy
  const handleDeleteItem = () => {
    console.log(id)
    console.log("clicked")
    onDelete(id)
  }

  const increaseLikes = () => {
    onAddLike(toy, id, likes)
  }
 
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={increaseLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteItem} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
