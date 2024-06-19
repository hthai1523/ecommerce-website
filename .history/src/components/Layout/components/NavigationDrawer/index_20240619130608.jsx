import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuth } from "../../../../contexts/authContext";
import routes from "../../../../config/route";
import { useSelector } from "react-redux";
import { cartsRemainingSelector } from "../../../../redux/selectors";
import avatar from "../../../../assets/avatar.jpg";
import { MENU_ITEMS } from "../Navigation"; // Import your MENU_ITEMS
import Menu from "../../../Popper copy/Menu";
import Button from "../../../Button";
import Notice from "../../../Popper/Notice";
import { FaUserPen } from "react-icons/fa6";

const navigation = [
  { name: "Home", to: routes.home },
  { name: "Products", to: routes.product },
  { name: "Blog", to: routes.blog },
  { name: "About", to: routes.about },
  { name: "Cart", to: routes.cart },
];


const NavigationDrawer = () => {
  const { currentUser, userLoggedIn } = useAuth();
  const cart = useSelector(cartsRemainingSelector);

  const handleMenuChange = useCallback((menuItem) => {
    switch (menuItem.type) {
      case "language":
        // Handle language change
        break;
      default:
        break;
    }
  }, []);


  return (
    <div className="flex flex-col gap-6 overflow-y-auto h-full">
      {navigation.map((item, index) => {
        if (index === navigation.length - 1) {
          return (
            <div className="relative" key={index}>
              <Button icon={<AiOutlineShoppingCart />} to={routes.cart} />
              <Notice>{cart?.length || 0}</Notice>
            </div>
          );
        } else {
          return (
            <Button
              to={item.to}
              key={index}
              style={({ isActive }) => (isActive ? { fontWeight: "900" } : {})}
            >
              {item.name}
            </Button>
          );
        }
      })}
      {userLoggedIn ? (
        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
          <Link to={routes.profile}>
            {currentUser.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName}
                className="w-8 h-8 object-cover rounded-full mx-6"
              />
            ) : (
              <FaUserPen
                size={24}
                className="w-8 h-8 object-cover mx-6"
              />
            )}
          </Link>
        </Menu>
      ) : (
        <Link to={routes.login}>
          <Button className="text-center font-medium text-sm lg:text-base cursor-pointer border-2 border-solid rounded-lg border-primary text-white py-2 lg:py-3 px-4 lg:px-5 mx-6 bg-primary hover:opacity-70 transition-opacity duration-150 ease-in-out">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavigationDrawer;
