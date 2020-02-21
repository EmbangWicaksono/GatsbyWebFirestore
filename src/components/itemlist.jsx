import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import "../styles/global.css";
const useItems = () => {
    const [items, setItems] = useState([]) 
    useEffect(() => {
      //added variable unsubscribe
      const unsubscribe = firebase
        .firestore() //access firestore
        .collection("items") //access "items" collection
        .onSnapshot(snapshot => {
          const listItems = snapshot.docs.map(doc => ({
            id: doc.id,     //id and data pushed into items array
            ...doc.data(),  //spread operator merges data to id.
          }))
          setItems(listItems)
        })
        //called the unsubscribe--closing connection to Firestore.
      return () => unsubscribe()
    }, [])
    return items
  }

const ItemList = ({ editItem }) => {
  const listItem = useItems();
  return (
    <table className="tg">
      <tbody>
        <tr>
          <td className="tg-ycr8">Name</td>
          <td className="tg-ycr8">Type</td>
          <td className="tg-i81m">Qty</td>
          <td className="tg-a02x">Description</td>
          <td className="tg-a02x"></td>
        </tr>
      </tbody>
      {listItem.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className="tg-ycr8">{item.name}</td>
            <td className="tg-ycr8">{item.type}</td>
            <td className="tg-i81m">{item.qty}</td>
            <td className="tg-a02x">{item.description}</td>
            <td className="tg-a02x"><button onClick={() => DeleteItem(item.id)}>Delete</button><button onClick={() => editItem(item)}>Edit</button></td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
const DeleteItem = (id) => {
    firebase
        .firestore()
        .collection("items")
        .doc(id)
        .delete()
};

export default ItemList;