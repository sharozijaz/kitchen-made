import React from "react";
import { Foods } from "./data";

function Food() {
  return (
    <>
      {Foods.map((FoodList) => (
        <div className="flex flex-col shadow-xl  gap-1 rounded-md hover:scale-110 hover:ease-in-out	ease-in-out	transition duration-150 hover:shadow-2xl">
          <div className="p-1">
            <img
              src={FoodList.imgURL}
              alt={FoodList.foodName}
              className="rounded  h-60 w-72 bg-center bg-cover "
            />
          </div>
          <div className="p-2 flex flex-col gap-4">
            <h3 className="text-3xl font-normal p-2	">{FoodList.foodName}</h3>
            <p className="text-xl p-2">
              Description: {FoodList.foodDescription}
            </p>
            <p className="text-xl p-2">
              Price:
              <span className="text-orange-400 pl-4">
                {FoodList.foodQuantity}
              </span>
            </p>
            <button className="text-white text-xl  hover:bg-orange-600 bg-orange-500 rounded-md cursor-pointer px-4 py-2 ">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Food;
