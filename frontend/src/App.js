import "./App.css";
import { RouterProvider } from "react-router-dom";
import User from "../src/components/user";

function App() {
  const name = "Rudra";
  return (
    <>
      <RouterProvider router={User} />
    </>
  );
}

export default App;
