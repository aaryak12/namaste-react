import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between border-gray-200 border-b-4 h-44"
        >
          <div className="text-left w-9/12 m-4">
            <div className="font-semibold">
              <span>{item?.card?.info?.name} - </span>
              <span>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div className="my-2">
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="py-2">
              <button className="p-2 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
          </div>
          <img
            className="w-3/12 p-4"
            src={CDN_URL + item?.card?.info?.imageId}
            alt="item-image"
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
