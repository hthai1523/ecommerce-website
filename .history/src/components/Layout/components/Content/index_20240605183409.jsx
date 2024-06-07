import { Navigate } from "react-router-dom";
import { auth } from "../../../../Firebase/Firebase";
import { doSignOut } from "../../../../Firebase/auth";
import Arrivals from "../Arrivals";
import Blog from "../Blog";
import PreProduct from "../PreProduct";
import routes from "../../../../config/route";
import { useAuth } from "../../../../contexts/authContext";

function Content() {

  const user = useAuth()

  const logOut = async() => {
    try {
      await doSignOut(auth)
    Navigate(routes.login)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(user.curretUser);

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
