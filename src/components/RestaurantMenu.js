import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-10 text-center">
      <h1 className="text-5xl font-bold font-sans">{name}</h1>
      <p className="my-4 font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        <MenuCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
