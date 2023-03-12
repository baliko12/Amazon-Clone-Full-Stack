import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Location from "@mui/icons-material/Place";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";
import Dropdown from "./DropDown";
import Language from "./Language";

function Header() {
  // const [cityy, setCity] = useState();
  // useEffect(() => {
  //   const token1 = "c32b733c2cb702";
  //   const loc = async () => {
  //     let url = `https://ipinfo.io/json?token=${token1}`;
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     console.log(data);
  //     setCity(data.city);
  //   };
  //   loc();
  // }, []);
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__option">
        <span className="header__optionLineOne">Deliver to</span>
        <span className="header__location">
          <Location />
        </span>
        <span className="header__optionLineTwo location__selector">
          Select Your Address
        </span>
      </div>
      <Dropdown />
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search Amazon"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <Language />
      <div className="header__nav">
        <Link to={!user && "/login"} className="link">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" className="link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineOne header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
