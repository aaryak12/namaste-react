const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img src={cloudinaryImageId} alt="res-logo" className="res-logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} rated</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
