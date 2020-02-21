import React from "react"
import ItemList from "../components/itemlist"
import AddItemForm from "../components/additemform"
const IndexPage = () => {
  
  return (
    <div>
      <h1>Firestore CRUD App </h1>
      <h2>Item List</h2>
      <ItemList/>
      <h2>Add Item</h2>
      <AddItemForm/>
    </div>
  )
}

export default IndexPage
