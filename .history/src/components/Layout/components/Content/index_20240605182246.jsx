import { Navigate } from "react-router-dom";
import { auth } from "../../../../Firebase/Firebase";
import { doSignOut } from "../../../../Firebase/auth";
import Arrivals from "../Arrivals";
import Blog from "../Blog";
import PreProduct from "../PreProduct";
import routes from "../../../../config/route";

function Content() {

  const logOut = async() => {
    await doSignOut(auth)
    Navigate(routes.login)
  }

  return (
   <>
        <Arrivals />
        <Blog />
        <PreProduct />
        <button onClick={logOut}>
          Login
        </button>
   </>
  );
}

export default Content;
