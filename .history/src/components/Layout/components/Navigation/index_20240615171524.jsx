import React, { useEffect, useState } from "react";
import Image from "../../../Image";
import avatar from "../../../../assets/avatar.jpg";
import Notice from "../../../Popper/Notice";
import Button from "../../../Button";
import { Link } from "react-router-dom";
import routeConfig from "../../../../config/route";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useAuth } from "../../../../contexts/authContext";

import {
  FaCircleQuestion,
  FaEarthAsia,
  FaKeyboard,
  FaUserPen,
} from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

import routes from "../../../../config/route";
import Menu from "../../../Popper copy/Menu";
import { useSelector } from "react-redux";
import { cartsRemainingSelector } from "../../../../redux/selectors";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../../../Firebase/Firebase";

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
    icon: <TbLogout />,
    title: "Logout",
    separate: true,
    isDangerous: true,
    isLogout: true,
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
  const user = useAuth();

  const cart = useSelector(cartsRemainingSelector);
  const [currentUser, setCurrentUser] = useState({});

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language": {
      }

      default:
        break;
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(
          doc(firebaseDB, "users", user.currentUser.uid)
        );
        if (userDoc.exists()) {
          const data = userDoc.data();
          setCurrentUser(data);
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="flex items-center justify-around gap-6 ">
      {navigation.map((item, index) => {
        if (index === navigation.length - 1) {
          return (
            <div className="relative" key={index}>
              <Button
                icon={<AiOutlineShoppingCart />}
                to={routes.cart}
              ></Button>
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
          <Link to={routes.profile}>
            {currentUser?.photoURL ? (
              <Image
                src={currentUser?.photoURL}
                alt={currentUser?.displayName}
                className="w-8 h-8 object-cover rounded-full mx-6"
              />
            ) : (
              <FaUserPen
                size={24}
                className="w-8 h-8 object-cover mx-6 text-primary"
              />
            )}
          </Link>
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
