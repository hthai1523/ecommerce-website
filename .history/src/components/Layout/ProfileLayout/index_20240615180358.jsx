import React from "react";
import Header from "../components/Header";
import { MotionDiv } from "../../../lib/framer";

export default function ProfileLayout({children}) {
  return (
    <div className="flex flex-col items-center justify-center lg:px-12 md:px-6 sm:px-0 pt-7 overflow-y-auto ">
      <Header />
      <div className="w-full mx-auto ">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {children}
        </MotionDiv>
      </div>
    </div>
  );
}
