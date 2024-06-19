import React from "react";
import CategorySelector from "../../CategorySelector";
import PriceRange from "../../PriceRange";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../../redux/selectors";

export default function SideBar() {
  const isSidebarOpen = useSelector(sidebarSelector);

  return (
    <div className="space-y-8 hidden md:block">
      <CategorySelector />
      <PriceRange />
      <Drawer
        title="Basic Drawer"
        placement={"left"}
        closable={false}
        // onClose={onClose}
        open={isSidebarOpen}
      >
        <CategorySelector />
        <PriceRange />
      </Drawer>
    </div>
  );
}
