import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/* React code*/
const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
);

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

root.render(<RouterProvider router={appRoute} />);