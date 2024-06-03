import React from "react";
import Header from "../components/Header";
import { MotionDiv } from "../../../lib/framer";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center px-12 pt-7 overflow-y-auto">
      <Header />
      <div className="w-full">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {children}
        </MotionDiv>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
