import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main"
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Layout = () => {
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path: "/home",
        element: <Home/>
      }
    ]
  },
  {
    path: "/about",
    element: "",
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
