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

function handleLiClick(id){
  const newFoodsArray = foods.filter((food) => food.id !==id)
  setFoods(newFoodsArray)
}

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=> handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
