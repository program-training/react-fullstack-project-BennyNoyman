import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext} from "react";
import './visibility.css';
export default function UserRegistration() {
    const Components = useContext(ComponentContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    return(
        <div className={components.UserRegistration}>
            <form onSubmit={(event) => event.preventDefault()}>
                <label>
                    Email:
                    <input/>
                </label>
                <label>
                    Password:
                    <input/>
                </label>
                <button>Create User</button>
            </form>
            <button onClick={() => setComponents({...components, Home: "visible", UserRegistration: "invisible"})}>Home</button>
        </div>
    )
}