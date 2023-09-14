import React from "react";
import "./assests/styles/global.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import ProtectedRoute from "./utils/ProtectedRoute";
import Requests from "./pages/requests";
import Sections from "./pages/sections";
function App() {
    const Layout = () => {
        return (
            <div className='main'>
                <Navbar />
                <div className='container'>
                    <div className='menuContainer'>
                        <Menu />
                    </div>
                    <div className='contentContainer'>
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/users",
                    element: <Users />,
                },
                {
                    path: "/users/:userId",
                    element: <User />,
                },
                {
                    path: "/requests",
                    element: <Requests />,
                },
                {
                    path: "/sections",
                    element: <Sections />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
