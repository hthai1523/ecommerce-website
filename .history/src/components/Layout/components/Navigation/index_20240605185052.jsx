import React from "react";
import Image from "../../../Image";
import avatar from "../../../../assets/avatar.jpg";
import Menu from "../../../Popper/Menu";
import Notice from "../../../Popper/Notice";
import Button from "../../../Button";
import { Link, useNavigate } from "react-router-dom";
import routeConfig from "../../../../config/route";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useAuth } from "../../../../contexts/authContext";

import { FaCircleQuestion, FaEarthAsia, FaKeyboard } from "react-icons/fa6";
import { useCartContext } from "../../../../contexts/CartContext";
import { doSignOut } from "../../../../Firebase/auth";
import { auth } from "../../../../Firebase/Firebase";
import routes from "../../../../config/route";
const classNames = (...className) => {
  return className.filter(Boolean).join(" ");
};

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

  const navigate = useNavigate()


  const logOut = async () => {
    try {
      await doSignOut(auth);
       navigate(routes.login)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4">
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
       <>
          <Image
            src={avatar}
            alt="Hoang Tien Thai"
            className="w-8 h-8 object-cover rounded-full mx-6"
          />
          <button onClick={logOut}>
            Log out
          </button>
       </>
      ) : (
        <Link
          to={routeConfig.login}
          className="bg-primary-color px-6 py-4 rounded-2xl  cursor-pointer hover:opacity-75"
        >
          Login
        </Link>
      )}
    </div>
  );
};
