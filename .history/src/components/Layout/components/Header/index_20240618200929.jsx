import Tippy from "@tippyjs/react";

import Search from "../../../Search";

import Navigation from "../Navigation";
import routeConfig from "../../../../config/route";
import { Link } from "react-router-dom";
import images from "../../../../assets";

function Header() {
  return (
    <div className="w-full h-24 fixed z-40 top-0 bg-white/50 backdrop-blur-xl fil md:px-8  flex items-center justify-between   ">
        <Link to={routeConfig.home} className="h-full">
          <img
            src={images.logo}
            alt="Thai Hoang"
            className="w-7 md:w-48 h-full px-4 object-contain"
          />
        </Link>

        {/* Search */}
        <Search />

        <Navigation />
    </div>
  );
}

export default Header;
