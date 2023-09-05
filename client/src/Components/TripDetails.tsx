import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext, useEffect, useState} from "react";
import './visibility.css';
import {IdContext} from "../Contexts/idContext";
interface Trip {
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
    id: string;
}
export default function TripDetails() {
    const [trip, setTrip] = useState<Trip | null>(null)
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
        <div className={components.TripDetails}>
            <div id="tripCard">
                <img src={trip?.image}></img>
                <h2>{trip?.name}</h2>
                <h3>{trip?.destination}</h3>
                <p>{trip?.description}</p>
                <h4>{trip?.price}$</h4>
                <p>
                    {trip?.startDate} - {trip?.endDate}
                </p>
                <p>{trip?.activities}</p>
            </div>
            <span onClick={() => setComponents({...components, TripDetails: "invisible", UpdateTripForm: "visible"})} className="material-symbols-outlined">
                            edit
                        </span>
            <button onClick={() => setComponents({...components, Trips: "visible", TripDetails: "invisible"})}>Trips</button>
        </div>
    )
}