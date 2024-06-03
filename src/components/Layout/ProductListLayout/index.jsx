import React from "react";
import Header from "../components/Header";
import { MotionDiv } from "../../../lib/framer";
import SideBar from "../SideBar";
import styles from './productList.module.scss';
import Footer from "../components/Footer";

export default function ProductListLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center px-12 pt-7 overflow-y-auto">
      <Header />
      <div className="w-full mt-[102px]">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex">
            <div className={styles['side-bar']}>
              <SideBar />
            </div>
            <div className={styles['main-content']}>{children}</div>
          </div>
        </MotionDiv>
      </div>
      <Footer />
    </div>
  );
}
