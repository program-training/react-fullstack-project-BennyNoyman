import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext} from "react";
import './visibility.css';
export default function Home() {
    const Components = useContext(ComponentContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    return(
        <div className={components.Home}>
            <button onClick={() => setComponents({...components, Trips: "visible", Home: "invisible"})}>Trips</button>
            <button onClick={() => setComponents({...components, UserLogin: "visible", Home: "invisible"})}>Login</button>
            <button onClick={() => setComponents({...components, UserRegistration: "visible", Home: "invisible"})}>Registration</button>
        </div>
    )
}