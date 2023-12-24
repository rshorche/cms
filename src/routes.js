import Home from "./pages/Home/Home";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import UsersList from "./pages/Users/UsersList";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/Users", element: <UsersList /> },
  { path: "/NewUser", element: <NewUser /> },
  { path: "/Products", element: <Products /> },
  { path: "/Product/:ProductID", element: <Product /> },
];

export default routes;
