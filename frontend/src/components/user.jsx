import { createBrowserRouter } from "react-router-dom";
import SignIn from "./signin";
import LogIn from "./login";
import Dashboard from "./dashboard";
const User = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

export default User;
