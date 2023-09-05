import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext} from "react";
import './visibility.css';
export default function UserLogin() {
    const Components = useContext(ComponentContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    return(
        <div className={components.UserLogin}>
            <form onSubmit={(event) => event.preventDefault()}>
                <label>
                    Email:
                    <input/>
                </label>
                <label>
                    Password:
                    <input/>
                </label>
                <button>Login</button>
            </form>
            <button onClick={() => setComponents({...components, Home: "visible", UserLogin: "invisible"})}>Home</button>
        </div>
    )
}