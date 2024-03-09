import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./conponents/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/*main.jsx da childernni ichidagi componentni yani home componentini yani asosiy sahifada turishi kerak bo'lgan componentni  <Outlet /> qilib chaqirildi   */}
        </div>
    );
}

export default App;
