import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArr, onDelete, onAddLike}) {

  const renderToys = toyArr.map(item => {
   return <ToyCard 
   toy={item}
   onAddLike={onAddLike}
   onDelete={onDelete} 
  //  id={item.id} 
  //  key={item.id} 
  //  name={item.name} 
  //  image={item.image} 
  //  likes={item.likes} 
   />})
  
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
