import React, { memo } from "react";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import Search from "../../../Search";
import Navigation from "../Navigation";
import routeConfig from "../../../../config/route";
import images from "../../../../assets";

const Header = () => {
  return (
    <header className="max-w-full w-full h-24 fixed z-40 top-0 bg-white/50 backdrop-blur-xl px-8">
      <div className="flex items-center justify-between h-full">
        <Link to={routeConfig.home} className="h-full">
          <img
            src={images.logo}
            alt="Thai Hoang"
            className="w-48 h-full px-4 object-cover"
          />
        </Link>
        <Search />
        <Navigation />
      </div>
    </header>
  );
};

export default memo(Header);
