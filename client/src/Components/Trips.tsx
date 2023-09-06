import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext, useState, useEffect} from "react";
import {IdContext} from "../Contexts/idContext";
import './visibility.css';
import './trip.css'
interface Trip {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
}
const deleteTrip = async (setTrips, id) => {
    try {
        const token = JSON.parse(localStorage.getItem("token") as string);
        console.log(token)
        const deletedTripData = await fetch('http://localhost:3000/api/trips/'+id, {method: 'delete', headers: {authorization: token}});
        if (!deletedTripData)
            throw new Error(`could not get data`);
        const deletedTrip: Trip = await deletedTripData.json()
        if (deletedTrip.id === id) {
            setTrips(trips => trips.filter(trip => trip.id !== deletedTrip.id));
        }else{
            throw new Error('fail to delete')
        }
    }catch (error) {
        console.log(error);
    }
}
export default function Trips() {
    const [trips, setTrips] = useState<Trip[]>([])
    useEffect(
        () => {
            const fetchTrips = async () => {
                try {
                    const tripsData = await fetch('http://localhost:3000/api/trips');
                    if (!tripsData)
                        throw new Error(`could not get data`);
                    const trips: Trip[] = await tripsData.json()
                    setTrips(trips);
                }catch (error) {
                    console.log(error);
                }
            }
            fetchTrips();
        }, []
    )
    const Components = useContext(ComponentContext);
    const Id = useContext(IdContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    if (!Id) return;
    const {setId} = Id;
    return (
        <div className={components.Trips}>
            {trips.map(
                trip => (
                    <div id="card" key={trip.id} onClick={() => {
                        setId(trip.id);
                        setComponents({...components, Trips: "invisible", TripDetails: "visible"})
                    }}>
                        <img src={trip.image}></img>
                        <h2>{trip.name}</h2>
                        <h3>{trip.destination}</h3>
                        <p>
                            {trip.startDate} - {trip.endDate}
                        </p>
                        <span onClick={(event) => {
                            event.stopPropagation();
                            deleteTrip(setTrips, trip.id);
                        }} className="material-symbols-outlined">
                            delete
                        </span>
                    </div>
                )
            )}
            <button onClick={() => setComponents({...components, Trips: "invisible", Home: "visible"})}>Home</button>
            <button onClick={() => setComponents({...components, Trips: "invisible", NewTripForm: "visible"})}>NewTripForm</button>
            <div>
            </div>
        </div>
    )
}