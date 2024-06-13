import Tippy from "@tippyjs/react";

import Search from "../../../Search";

import { Navigation } from "../Navigation";
import routeConfig from '../../../../config/route';
import { Link } from "react-router-dom";
import images from "../../../../assets";

function Header() {
  

  return (
    <div className="max-w-[999999px] w-full h-24 fixed z-40 top-0 bg-white/50 backdrop-blur-xl fil px-8  ">
      <div className=" flex items-center justify-between  ">
        <Link 
          to={routeConfig.home}
        >
          <img src={images.logo} alt="Thai Hoang" className="w-48 h h-full px-4 object-cover" />
        </Link>

        {/* Search */}
        <Search />

        <Navigation />
      </div>
    </div>
  );
}

export default Header;
