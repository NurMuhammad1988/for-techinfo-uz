import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div>
            <div>Navbar</div>
            <Outlet/>
        </div>
    );
}

export default App;
