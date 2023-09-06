import {ComponentContext} from "../Contexts/ComponentsContext";
import {IdContext} from "../Contexts/idContext";
import {useContext, useEffect, useState} from "react";
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

const submit = async (trip: Trip, id: string) => {
    try {
        const token = JSON.parse(localStorage.getItem("token") as string);
        const addedTripData = await fetch('http://localhost:3000/api/trips/'+id, {
            headers: {authorization: token, "content-Type": "application/json"}, method: 'put', body: JSON.stringify(trip)});
        const updatedTrip: Trip = await addedTripData.json();
        if (!updatedTrip) throw new Error(`fail to get data`)
        console.log(updatedTrip);
    }catch (error) {
        console.log(error)
    }
}

export default function UpdateTripForm() {
    const [trip, setTrip] = useState<Trip>(
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
    const Id = useContext(IdContext);
    if (!Id) return;
    const {id} = Id;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Components = useContext(ComponentContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
            const fetchTrip = async () => {
                try {
                    const tripData = await fetch('http://localhost:3000/api/trips/'+id);
                    const trip: Trip = await tripData.json();
                    setTrip(trip);
                } catch (error) {
                    console.log(error)
                }
            }
            fetchTrip();
        }, [id]
    )
    return(
        <div className={components.UpdateTripForm}>
            <form onSubmit={() => {
                submit(trip, id);
            }}>
            <label>
                name:
                <input value={trip.name}
    onChange={(event) => setTrip({...trip, name: event.target.value})}/>
            </label>
            <label>
                destination:
                <input value={trip.destination}
    onChange={(event) => setTrip({...trip, destination: event.target.value})}/>
            </label>
            <label>
                startDate:
                <input value={trip.startDate}
    onChange={(event) => setTrip({...trip, startDate: event.target.value})}/>
            </label>
            <label>
                endDate:
                <input value={trip.endDate}
    onChange={(event) => setTrip({...trip, endDate: event.target.value})}/>
            </label>
            <label>
                description:
                <input value={trip.description}
    onChange={(event) => setTrip({...trip, description: event.target.value})}/>
            </label>
            <label>
                price:
                <input value={trip.price}
    type={"number"} onChange={(event) => setTrip({...trip, price: parseInt(event.target.value)})}/>
            </label>
            <label>
                image:
                <input value={trip.image}
    onChange={(event) => setTrip({...trip, image: event.target.value})}/>
            </label>
            <label>
                activities:
                <input value={trip.activities}
    onChange={(event) => setTrip({...trip, activities: event.target.value.split(',')})}/>
            </label>
                <button>Update Trip</button>
            </form>
            <button onClick={() => setComponents({...components, Trips: "visible", UpdateTripForm: "invisible"})}>Trips</button>
        </div>
    )
}