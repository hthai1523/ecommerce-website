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
          <div className="w-[210px] px-4  text-left text-3xl font-extrabold green-primary-color"><img src={images.logo} alt="Thai Hoang Shop"/></div>
        </Link>

        {/* Search */}
        <Search />

        <Navigation />
      </div>
    </div>
  );
}

export default Header;
