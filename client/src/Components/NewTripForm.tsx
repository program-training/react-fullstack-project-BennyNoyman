import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext, useState} from "react";
import './visibility.css';
interface Trip {
    id?: string
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
}
const submit = async (newTrip: Trip) => {
    try {
        const token = JSON.parse(localStorage.getItem("token") as string);
        const addedTripData = await fetch('http://localhost:3000/api/trips', {
            headers: {authorization: token, "content-Type": "application/json"}, method: 'post', body: JSON.stringify(newTrip)});
        const addedTrip: Trip = await addedTripData.json();
        if (!addedTrip) throw new Error(`fail to get data`)
        console.log(addedTrip);
    }catch (error) {
        console.log(error)
    }
}
export default function NewTripForm() {
    const Components = useContext(ComponentContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newTrip, setNewTrip] = useState<Trip>(
        {
            name: "",
            destination: "",
            startDate: "",
            endDate: "",
            description: "",
            price: 0,
            image: "",
            activities: []
        }
    )
    return(
        <div className={components.NewTripForm}>
            <form onSubmit={() => {
                submit(newTrip);
            }}>
                <label>
                    name:
                    <input onChange={(event) => setNewTrip({...newTrip, name: event.target.value})}/>
                </label>
                <label>
                    destination:
                    <input onChange={(event) => setNewTrip({...newTrip, destination: event.target.value})}/>
                </label>
                <label>
                    startDate:
                    <input onChange={(event) => setNewTrip({...newTrip, startDate: event.target.value})}/>
                </label>
                <label>
                    endDate:
                    <input onChange={(event) => setNewTrip({...newTrip, endDate: event.target.value})}/>
                </label>
                <label>
                    description:
                    <input onChange={(event) => setNewTrip({...newTrip, description: event.target.value})}/>
                </label>
                <label>
                    price:
                    <input type={"number"} onChange={(event) => setNewTrip({...newTrip, price: parseInt(event.target.value)})}/>
                </label>
                <label>
                    image:
                    <input onChange={(event) => setNewTrip({...newTrip, image: event.target.value})}/>
                </label>
                <label>
                    activities:
                    <input onChange={(event) => setNewTrip({...newTrip, activities: event.target.value.split(',')})}/>
                </label>
                <button>add new trip</button>
            </form>
            <button onClick={() => setComponents({...components, Trips: "visible", NewTripForm: "invisible"})}>Trips</button>
        </div>
    )
}