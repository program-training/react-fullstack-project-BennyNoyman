import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext, useRef} from "react";
import './visibility.css';
interface Trip {
    name?: string;
    destination?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    price?: number;
    image?: string;
    activities?: string;
}
export default function NewTripForm() {
    const Components = useContext(ComponentContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    const name = useRef<HTMLInputElement | null>(null);
    const destination = useRef<HTMLInputElement | null>(null);
    const startDate = useRef<HTMLInputElement | null>(null);
    const endDate = useRef<HTMLInputElement | null>(null);
    const description = useRef<HTMLInputElement | null>(null);
    const price = useRef<HTMLInputElement | null>(null);
    const image = useRef<HTMLInputElement | null>(null);
    const activities = useRef<HTMLInputElement | null>(null);
    const newTrip = {
        name: name.current?.value,
        destination: destination.current?.value,
        startDate: startDate.current?.value,
        endDate: endDate.current?.value,
        description: description.current?.value,
        price: price.current?.value,
        image: image.current?.value,
        activities: activities.current?.value.join(' ')
    }
    return(
        <div className={components.NewTripForm}>
            <form onSubmit={(event) => event.preventDefault()}>
                <label>
                    name:
                    <input ref={name}></input>
                </label>
                <label>
                    destination:
                    <input ref={destination}></input>
                </label>
                <label>
                    startDate:
                    <input ref={startDate}></input>
                </label>
                <label>
                    endDate:
                    <input ref={endDate}></input>
                </label>
                <label>
                    description:
                    <input ref={description}></input>
                </label>
                <label>
                    price:
                    <input type={"number"} ref={price}></input>
                </label>
                <label>
                    image:
                    <input ref={image}></input>
                </label>
                <label>
                    activities:
                    <input ref={activities}></input>
                </label>
                <button>add new trip</button>
            </form>
            <button onClick={() => setComponents({...components, Trips: "visible", NewTripForm: "invisible"})}>Trips</button>
        </div>
    )
}