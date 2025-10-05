import { useState } from "react";

export default function ColorBlock() {
    const [color, setColor] = useState("lightblue");

    const toggleColor = () => {
        setColor(prevColor => prevColor === "lightblue" ? "lightgreen" : "lightblue");
    }

    return (
        <div
        style={{ backgroundColor: color, cursor: "pointer", display:"flex", alignItems:"center", justifyContent:"center", color: "black"}} 
        onClick={toggleColor}
        >
            Click, to change the color
        </div>
    )
}