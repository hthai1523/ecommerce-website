import React from "react";
import Image from "../../../Image";
import avatar from "../../../../assets/avatar.jpg";
import Notice from "../../../Popper/Notice";
import Button from "../../../Button";
import { Link, useNavigate } from "react-router-dom";
import routeConfig from "../../../../config/route";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

import { useAuth } from "../../../../contexts/authContext";

import { FaCircleQuestion, FaEarthAsia, FaKeyboard } from "react-icons/fa6";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";

import { useCartContext } from "../../../../contexts/CartContext";
import { doSignOut } from "../../../../Firebase/auth";
import { auth } from "../../../../Firebase/Firebase";
import routes from "../../../../config/route";
import Menu from "../../../Popper copy/Menu";


const MENU_ITEMS = [
  {
    icon: <FaEarthAsia />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FaCircleQuestion />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FaKeyboard />,
    title: "Keyboard shortcuts",
  },
  
  {
    icon: <HiArrowRightStartOnRectangle />,
    title: "Logout",
    isDangerous: true,
  },
  
];

const navigation = [
  { name: "Home", to: routeConfig.home },
  { name: "Products", to: routeConfig.product },
  { name: "Blog", to: routeConfig.blog },
  { name: "About", to: routeConfig.about },
  { name: "", to: routeConfig.cart },
];

export const Navigation = () => {
  const { cart } = useCartContext();
  const user = useAuth();

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await doSignOut(auth);
      navigate(routes.login);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language": {
      }

      default:
        break;
    }
  };

  return (
    <div className="flex items-center justify-around gap-4 ">
      {navigation.map((item, index) => {
        if (index === navigation.length - 1) {
          return (
            <div className="relative" key={index}>
              <Button icon={<AiOutlineShoppingCart />} to="/cart"></Button>
              <Notice>{cart?.length || 0}</Notice>
            </div>
          );
        } else
          return (
            <Button
              to={item.to}
              key={index}
              style={({ isActive }) => {
                return isActive ? { fontWeight: "900" } : {};
              }}
            >
              {item.name}
            </Button>
          );
      })}
      {user.userLoggedIn ? (
        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
          <Image
            src={avatar}
            alt="Hoang Tien Thai"
            className="w-8 h-8 object-cover rounded-full mx-6"
          />
        </Menu>
      ) : (
        <Link to={routeConfig.login}>
          <Button className="text-center font-medium text-sm lg:text-base cursor-pointer border-2 border-solid rounded-lg border-primary text-white py-2 lg:py-3 px-4 lg:px-5 mx-6 bg-primary hover:opacity-70 transition-opacity duration-150 ease-in-out">
            Login
          </Button>
        </Link>
      )}
    </div>
  );
};
