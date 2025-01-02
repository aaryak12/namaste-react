import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="m-10 ">
      <h1 className="text-5xl font-bold font-sans">{name}</h1>
      <h3 className="my-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3 className="text-3xl font-semibold">Menu</h3>
      <ul className="py-4">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="text-sm">
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
