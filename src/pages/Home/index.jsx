import { memo } from "react";
import Content from "../../components/Layout/components/Content";
import Slider from "../../components/Slider";
import { MotionDiv } from "../../lib/framer";
function Home() {

  (function () {
    window.scrollTo(0, 0);
  })();

  return (
    <>
      <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <Slider />
        <Content />
      </MotionDiv>
    </>
  );
}

export default memo(Home);
