import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-52 rounded-3xl hover:bg-gray-300">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
        className="size-40 rounded-3xl"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="text-sm">{cuisines.join(", ")}</h4>
      <div className="py-2 text-sm">
        <h4 className="font-semibold">{avgRating} rated</h4>
        <div className="flex justify-between my-2">
          <h4>{costForTwo}</h4>
          <h4>{sla.slaString}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
