import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./conponents/Navbar";
import Footer from "./conponents/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Outlet />
            {/*main.jsx da childernni ichidagi componentni yani home componentini yani asosiy sahifada turishi kerak bo'lgan componentni  <Outlet /> qilib chaqirildi   */}
            <Footer/>
            {/* footer appga qo'yilganda hamma componentlarni footer qismiga qo'yildi yani  */}
        </div>
    );
}

export default App;
