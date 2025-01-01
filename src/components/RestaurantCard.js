import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-52 bg-gray-100 rounded-lg">
      <img src={`${CDN_URL}${cloudinaryImageId}`} alt="res-logo" className="res-logo size-44 rounded-lg" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} rated</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
