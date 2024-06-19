import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuth } from "../../../../contexts/authContext";
import routes from "../../../../config/route";
import { useSelector } from "react-redux";
import { cartsRemainingSelector } from "../../../../redux/selectors";
import avatar from "../../../../assets/avatar.jpg";
import { MENU_ITEMS } from "../Navigation"; // Import your MENU_ITEMS
import Menu from "../../../Popper copy/Menu";

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

  return (
    <div className="flex flex-col gap-6">
      {navigation.map((item, index) => (
        <Link to={item.to} key={index} className="text-lg">
          {item.name}
        </Link>
      ))}
      <div className="relative">
        <Link to={routes.cart}>
          <AiOutlineShoppingCart size={24} />
          <span>{cart.length || 0}</span>
        </Link>
      </div>
      {userLoggedIn ? (
        <Menu items={MENU_ITEMS}>
          <Link to={routes.profile}>
            {currentUser?.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName}
                className="w-8 h-8 object-cover rounded-full"
              />
            ) : (
              <img
                src={avatar}
                alt="Avatar"
                className="w-8 h-8 object-cover rounded-full"
              />
            )}
          </Link>
        </Menu>
      ) : (
        <Link to={routes.login} className="text-lg">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavigationDrawer;
