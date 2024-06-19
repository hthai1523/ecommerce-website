import React from "react";
import CategorySelector from "../../CategorySelector";
import PriceRange from "../../PriceRange";
import { Drawer } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sidebarSelector } from "../../../redux/selectors";
import sidebarSlice from "./sidebarSlice";

export default function SideBar() {
  const isSidebarOpen = useSelector(sidebarSelector);
const dispatch = useDispatch()
  const onClose = () => {
    dispatch(sidebarSlice.actions.openSidebar());
  };
  return (
    <div className="space-y-8 hidden md:block">
      <CategorySelector />
      <PriceRange />
      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={isSidebarOpen}
        width={'70%'}
      >
        <CategorySelector />
        <PriceRange />
      </Drawer>
    </div>
  );
}
