import { useState } from "react"
import Seo from "../components/Seo";

export default function Home() {
    const [counter, setCounter] = useState(0);
    const onButtonClick = () => {
        setCounter((prev)=>(prev+1));
    }
    return (
        <div>
            <Seo title="Home" />
            <h1>Hello {counter}</h1>
            <button onClick={onButtonClick}>+</button>
        </div>
    );
}