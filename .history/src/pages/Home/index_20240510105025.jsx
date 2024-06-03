import { memo } from "react";
import Content from "../../components/Layout/components/Content";
import Slider from "../../components/Slider";
import { MotionDiv } from "../../lib/framer";
// import {useAuth} from '../../contexts/authContext';
import {doSignOut} from '../../Firebase/auth';
import {useAuth} from '../../contexts/authContext';
import Button from "../../components/Button";
function Home() {
  const userLoggedIn = useAuth();


  (function () {
    window.scrollTo(0, 0);
  })();

  return (
    <>
      <MotionDiv initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
        <Slider />
        <Content />
        <Button onClick={(e) => {
          e.preventDefault()
          try {
            doSignOut()
            alert('You have been signed out')
          } catch (error) {
            
          }
        }}>sign out</Button>
      </MotionDiv>
    </>
  );
}

export default memo(Home);
