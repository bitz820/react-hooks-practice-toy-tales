import React, {useState} from "react";

function ToyForm({onAddItem}) {
  const [name, setName] = useState('')
  const [img, setImg] = useState('')

  const handleSubmitToy = (e) => {
    e.preventDefault()
    // console.log("name:", name)
    // console.log("img:", img)
    const newToy = {
      name: name,
      img: img,
      likes: 0
    }
    onAddItem(newToy)
  }



  const handleImageChange = (e) => {
    setImg(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }


  return (
    <div className="container">
      <form onSubmit={handleSubmitToy} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          // value= ""
        br />
        <input
          onChange={handleImageChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          // value="image"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
