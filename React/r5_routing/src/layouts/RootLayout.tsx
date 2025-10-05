import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
    return (
        <div>
            <Navbar/>
            <div className="container mt-4">
                <Outlet/>
            </div>
        </div>
    )
}