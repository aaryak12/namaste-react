import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const btnHandler = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Selector to subscribe to the store
  const cartItems= useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-orange-200 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">🛒 ({cartItems.length} items)</li>
          <button
            className="px-4"
            onClick={() => {
              btnHandler();
            }}
          >
            {btnName}
          </button>
          {btnName === "Logout" && (
            <li className="px-4 font-bold">{loggedInUser}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
