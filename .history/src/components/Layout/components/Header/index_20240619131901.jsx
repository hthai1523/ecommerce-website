import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import { Drawer } from "antd";
import Search from "../../../Search";
import Navigation from "../Navigation";
import routeConfig from "../../../../config/route";
import images from "../../../../assets";
import NavigationDrawer from "../NavigationDrawer"; // New component

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="max-w-[999999px] w-full h-24 fixed z-40 top-0 bg-white/50 backdrop-blur-xl px-8">
      <div className="flex items-center justify-between h-full">
        <Link to={routeConfig.home} className="h-full">
          <img
            src={images.logo}
            alt="Thai Hoang"
            className="w-48 h-full px-4 object-contain"
          />
        </Link>

        <div className="hidden md:block">
          <Search />
        </div>

        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="block md:hidden">
          <Hamburger toggled={isDrawerOpen} toggle={setIsDrawerOpen} />
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      >
        <NavigationDrawer />
      </Drawer>
    </div>
  );
}

export default Header;
