import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArr, setToyArr] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => r.json())
      .then(toyBox => setToyArr(toyBox))
  }, [])

  function onAddItem(newToy) {

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    }
  
    fetch("http://localhost:3001/toys", configObj)
      .then(r => r.json())
      .then(newToy => {
        console.log(newToy)
        setToyArr([...toyArr, newToy])
      })
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const onDelete = (id) => {
    fetch(`http://localhost:3001/toys/${id}`, { method: "DELETE" })
      .then(r => r.json())
      .then(() => {
        const updateArr = toyArr.filter(toy => toy.id !== id)
        setToyArr(updateArr)
      })
  }

  const onAddLike = (toy, id, likes) => {
    console.log(id)
    console.log(toy)
    // I want to be able to have access to "toy" so we can spread over the values in updatedLikes, then overwrite likes. 
    const updatedLikes = {
      ...toy,
      likes: likes+1
    }
    console.log(updatedLikes)

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedLikes)
    }

    fetch(`http://localhost:3001/toys/${id}`, configObj)
      .then(r => r.json())
      .then(updateToy => {
        console.log(updateToy)
        const updatedArr = toyArr.map(toy => toy.id === id ? updateToy : toy)
        setToyArr(updatedArr)
      })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddItem={onAddItem} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onAddLike={onAddLike} onDelete={onDelete} toyArr={toyArr} />
    </>
  );
}

export default App;
