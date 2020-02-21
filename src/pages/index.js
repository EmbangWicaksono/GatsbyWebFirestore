import React, { useState } from "react"
import ItemList from "../components/itemlist"
import AddItemForm from "../components/additemform"
import UpdateItem from "../components/updateitem"
const IndexPage = () => {
  
   /*
  We don't know what is going to be edited so we set an
  empty set for the <UpdateItem /> form
  */
 const initialItemState = [
  { id: null, name: "", type: "", qty: "", description: "" },
]
/*
Make a state for whether or not edit mode is turned on.
It will begin as false.
*/
const [editing, setEditing] = useState(false)
const editItem = (item) => {
  setEditing(true)
  setCurrentItem({
    id: item.id,
    name: item.name,
    type: item.type,
    qty: item.qty,
    description: item.description,
  })
}
/*
Apply the empty initialItemState from above to a
currentItem state. currentItem will be used for
editing individual items. 
*/
const [currentItem, setCurrentItem] = useState(initialItemState)
  return (
    <div>
      <h1>Firestore CRUD App </h1>
      <h2>Item List</h2>
      <ItemList editItem={editItem}/>
      <h2>Add Item</h2>
      {editing ? <UpdateItem setEditing={setEditing} currentItem={currentItem}/> : <AddItemForm />}
    </div>
  )
}



export default IndexPage
