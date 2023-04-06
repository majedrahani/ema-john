import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Buy from './component/buy/Buy';
import Header from './component/Header/Header';
import Home from './component/Layout/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoaders from './Loaders/cartProductLoaders';
import CheckOut from './component/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
    ,children: [
      {
        path: "/",
        element: <Buy></Buy>,
      },
      {
        path: "/order",
        element: <Orders></Orders>,
        loader: cartProductsLoaders,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "checkout",
        element: <CheckOut></CheckOut>
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ]
  },
 
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
