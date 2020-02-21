import React, { useState, useEffect } from 'react'

const UpdateItem = ({ setEditing, currentItem }) => {
    const [item, setItem] = useState(currentItem);
    /*
  Side effect is that without UseEffect if you start editing one item, 
  then try to switch to another item, nothing will happen.
  The component is already open, and although the state 
  on the parent has changed, it's not registered down to the props.
  We want to let the UpdateItem form component know the props have changed.
  With the Effect Hook, we create a callback function that updates the item 
  state with the new prop thats being sent through.
  */
  useEffect(() => {
    setItem(currentItem);
    //Added console.log to show what the current item is and that it has passed
    console.log("useEffect passes the currentItem: ", currentItem);
  }, [currentItem]);

  const onSubmit = e => {
    e.preventDefault();
    //When you click the submit button you can see what it being passed.
    console.log("onSubmit passes the id and items", { item });
  };
    return (
        <>
      <h2>Update Item</h2>
      <form>
        <label htmlFor="Update Item">Update Item:</label>
        <input type="text" name="name" />
        <input type="text" name="type" />
        <input type="number" name="qty" />
        <input type="text" name="description" />
        <button>Update</button>
        <button onClick={()=> setEditing(false)}>Cancel</button>
      </form>
    </>
    )
}
export default UpdateItem