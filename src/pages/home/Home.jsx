import { useState } from "react";
import heroImage from "../../assets/DrawKit-cooking-kitchen-food-vector-illustrations-02.svg";
import Food from "../../components/food-item/Food";
import { Foods } from "../../components/food-item/data";
function Home() {
  const [itemSelected, setSelectedItem] = useState();

  return (
    <>
      <main className="flex p-7 items-center md:flex-row sm:flex-col-reverse w-full h-full">
        <div>
          <h1 className="text-7xl sm:py-12 leading-normal ">
            Ready to experience the{" "}
            <span className="text-orange-400">best-tasting</span> food?
          </h1>
          <p className="text-2xl">
            Imagine never having to worry about your next meal. Prepare your own
            food at home with KitchenMade.
          </p>
          <button className=" text-white text-xl  hover:bg-orange-600 bg-orange-500 rounded-md cursor-pointer px-8 py-4 mt-8">
            Get Started
          </button>
        </div>
        <div className="w-4/5">
          <img src={heroImage} alt="Food Cooking" />
        </div>
      </main>
      <div className="">
        <select
          className="bg-orange-500 h-10 w-28 rounded"
          // onClick={setSelectedItem}
          // onChange={handleItemsSelectedChange}
        >
          <option className="bg-white" value="FruitList">
            A
          </option>
          <option className="bg-white" value="VegitableList">
            B
          </option>
          <option className="bg-white" value="FastFoodList">
            C
          </option>
          <option className="bg-white" value="SpiceList">
            D
          </option>
        </select>
      </div>
      <section className="p-8 flex flex-wrap content-center justify-center gap-x-10 gap-y-36">
        <Food />
      </section>
    </>
  );
}

export default Home;
