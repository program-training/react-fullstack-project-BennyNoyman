import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext} from "react";
import './visibility.css';
export default function UpdateTripForm() {
    const Components = useContext(ComponentContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    return(
        <div className={components.UpdateTripForm}>
            <form onSubmit={(event) => event.preventDefault()}>
                <label>
                    name:
                    <input></input>
                </label>
                <label>
                    destination:
                    <input></input>
                </label>
                <label>
                    startDate:
                    <input></input>
                </label>
                <label>
                    endDate:
                    <input></input>
                </label>
                <label>
                    description:
                    <input></input>
                </label>
                <label>
                    price:
                    <input></input>
                </label>
                <label>
                    image:
                    <input></input>
                </label>
                <label>
                    activities:
                    <input></input>
                </label>
                <button>Update Trip</button>
            </form>
            <button onClick={() => setComponents({...components, Trips: "visible", UpdateTripForm: "invisible"})}>Trips</button>
        </div>
    )
}