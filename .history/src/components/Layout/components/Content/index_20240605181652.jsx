import { auth } from "../../../../Firebase/Firebase";
import { doSignOut } from "../../../../Firebase/auth";
import Arrivals from "../Arrivals";
import Blog from "../Blog";
import PreProduct from "../PreProduct";

function Content() {
  return (
   <>
        <Arrivals />
        <Blog />
        <PreProduct />
        <button onClick={() => await doSignOut(auth)}>
          Login
        </button>
   </>
  );
}

export default Content;
