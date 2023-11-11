import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    // const newFoodsArray =[...foods,newFood]
    // setFoods(newFoodsArray);
    setFoods([...foods,newFood])
  }

// function handleLiClick(id){
//   const newFoodsArray = foods.filter((food) => food.id !==id)
//   setFoods(newFoodsArray)
// }


// ----------------------------update array in state-------------------------------
function handleLiClick(id){
  const newFoodsArray = foods.map((food) =>{
    if(food.id === id){
      return{
        ...food,
        heatLevel : food.heatLevel + 1,
    };
    }
    else{
      return food;
    }
  })

  setFoods(newFoodsArray);
}

// -----------------------------Working With Multiple State Variables---------------------------------------
 



<select name="filter">
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Mexican">Mexican</option>
  <option value="Thai">Thai</option>
  <option value="Sichuan">Sichuan</option>
</select>

const [filterBy, setFilterBy] = useState("All");

function handleFilterChange(e){
  setFilterBy(e.target.value)
}

const foodsToDisplay = foods.filter((food) =>{
  if(filterBy === "All"){
    return true;
  }else {
    return food.cuisine === filterBy;
  }

})

// const foodsToDisplay = foods.filter((food) => {
//   if (filterBy === "All") {
//     return true;
//   } else {
//     return food.cuisine === filterBy;
//   }
// });




const foodList = foodsToDisplay.map((food) => (
  <li key={food.id} onClick={()=> handleLiClick(food.id)}>
    {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  </li>
));
// --------------------------------------------------------------------------------------------
  // const foodList = foods.map((food) => (
  //   <li key={food.id} onClick={()=> handleLiClick(food.id)}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // ));

  return (
    <div>
    <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Mexican">Mexican</option>
          <option value="Thai">Thai</option>
          <option value="Sichuan">Sichuan</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
