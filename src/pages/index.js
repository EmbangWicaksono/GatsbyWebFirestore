import React from "react"
// import firebase from "../components/firebase"
import ItemList from "../components/itemlist"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => {
  // firebase
  //   .firestore()
  //   .collection("items")
  //   .add({
  //     name: "Corona",
  //     type: "beer",
  //     qty: 5,
  //     description:
  //       "is a pale lager produced by Cervecería Modelo in Mexico",
  //   })
  //   .then(ref => {
  //     console.log("Added document with ID: ", ref.id)
  //   })

  return (
    <div>
      <h1>Firestore CRUD App </h1>
      <h2>Item List</h2>
      <ItemList/>
      <h2>Add Item</h2>
    </div>
  )
}

export default IndexPage
