import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
 
  const [inputName, setInputName]= useState('');
  const [inputCat, setInputCat]= useState('Produce');

  function createItem(e){
    e.preventDefault();
    const item = {id: uuid() , name:inputName, category:inputCat}
    onItemFormSubmit(item);
  }
  return (
    <form className="NewItem" onSubmit={(e) => createItem(e)}>
  
      <label>
        Name:
        <input type="text" name="name" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={inputCat} onChange={(e) => setInputCat(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
      
  </form>
    
  );
}

export default ItemForm;
