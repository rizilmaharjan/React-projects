import React, { useEffect, useState } from "react";
import "./index.css";

// get the local storage data
const getLocalData = ()=>{
    const lists = localStorage.getItem("myToToList");

    if(lists){
        return JSON.parse(lists);
    }
    else{
        return [];
    }
}

const ToDo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // Add items function
  const addItem = () => {
    if (!inputData) {
      alert("Please enter your items");
    } 
    else if(inputData && toggleButton){
        setItems(
            items.map((curElem)=>{
                if(curElem.id === isEditItem){
                    return {
                        ...curElem, name: inputData
                    };
                }
                return curElem;
                
            })
        )

        setInputData("");
        setIsEditItem("edElem");
        setToggleButton(false);
    

    }
    
    else {
        const myNewInputData = {
            id: new Date().getTime().toString(),
            name: inputData
        }
      setItems([...items, myNewInputData]);
      setInputData("");
    }

    
  };
  // To Delete the items
  const delItem = (id)=>{
    const updatedItem = items.filter((curElem)=>{
        return curElem.id !== id;
    })
    setItems(updatedItem)

}
// Remove All the items from the list
const removeall = ()=>{
    setItems([]);
}

// storing the list in local storage

useEffect(()=>{
    localStorage.setItem("myToToList", JSON.stringify(items));

},[items])

// edit the items
const editBtn = (edElem)=>{
    const item_todo_edited = items.find((curElem)=>{
        return curElem.id === edElem;

    })
    setInputData(item_todo_edited.name);
    setIsEditItem(edElem);
    setToggleButton(true);

}
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="images/todo.svg" alt="list" />
            <figcaption>Add Your List Here 🤟</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className="form-control"
            />
            {
                toggleButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>) : (<i className="fa fa-plus add-btn" onClick={addItem}></i>)
            }
          
          </div>
          {/* Show our items */}
          <div className="showItems">
            {items.map((curVal) => {
              return (
                <div className="eachItem" key={curVal.id}>
                  <h3>{curVal.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={()=>editBtn(curVal.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=>delItem(curVal.id)} ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remove all button */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeall}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
