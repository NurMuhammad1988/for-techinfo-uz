import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//react router dom

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path:"/blogs",
                element:<Blogs/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },

            {
                path:"/services",
                element:<Services/>
            },
        ],
    },
]);

//<RouterProvider router={router} /> pastda  <React.StrictMode>ni ichida turgan shu router tepada  o'zgaruvchiga olinib pathga asosiy sahifa elementga umumiy app childernni ichiga esa elementlrga yangi ochilgan componentlar qo'yiladi shunda hammasi routerga o'ralgan hissoblanadi

//

//childernni ichiga qo'yilgan componentlarni brawser ochadi bo'masa yoq chunki bu oddiy reactdagi app ni ichida turganday gap yani App ni o'zigaham chaqirib qo'yish kerak yani bu app.jsx ni ichiga childernlarini router qilish 

//childernni ichiga yangi component elemnga yozilganda yoqoroga import qilinishi kerak odatda aftamatik tarzda import bo'ladi

//react router dom

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
//aslida bu joyda app.jsx bo'lishi kerak edi lekin React router domda shunday qilinarkan dacumentatsiyasida shunday berilgan
