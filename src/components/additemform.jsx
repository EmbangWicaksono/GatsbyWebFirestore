import React, { useState } from 'react'
import firebase from 'firebase'

const AddItemForm = () => {
    //useState() hook captures the value from the input value
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [qty, setQty] = useState(null);
  const [description, setDescription] = useState("");

  /* The onSubmit function we takes the 'e'
    or event and submits it to Firebase
    */
  const onSubmit = e => {
    /* 
    preventDefault is important because it
    prevents the whole page from reloading
    */
    e.preventDefault();
    firebase
      .firestore()
      .collection("items")
      .add({
        name,
        type,
        qty,
        description,
      })
      //.then will reset the form to nothing
      .then(() => setName(""), setType(""), setQty(''), setDescription(""))
  };
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.currentTarget.value)}/>
            <input type="text" name="type" placeholder="Type" value={type} onChange={e => setType(e.currentTarget.value)}/>
            <input type="number" name="qty" placeholder="qty" value={qty} onChange={e => setQty(e.currentTarget.value)}/>
            <input type="text" name="description" placeholder="description" value={description} onChange={e => setDescription(e.currentTarget.value)}/>
            <button>Submit</button>
        </form>
    )
}

export default AddItemForm