import { useState } from "react"
import NavBar from "../components/NavBar";

export default function Home() {
    const [counter, setCounter] = useState(0);
    const onButtonClick = () => {
        setCounter((prev)=>(prev+1));
    }
    return (
        <div>
            <NavBar />
            <h1>Hello {counter}</h1>
            <button onClick={onButtonClick}>+</button>
        </div>
    );
}