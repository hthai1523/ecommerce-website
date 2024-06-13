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
         <img src={images.logo} alt="Thai Hoang Shop" className="w-[210px] h-full px-4"/>
        </Link>

        {/* Search */}
        <Search />

        <Navigation />
      </div>
    </div>
  );
}

export default Header;
