import React, {useState, createContext} from "react";
interface ComponentsData {
    Home: "visible" | "invisible";
    Trips: "visible" | "invisible";
    TripDetails: "visible" | "invisible";
    NewTripForm: "visible" | "invisible";
    UpdateTripForm: "visible" | "invisible";
    UserRegistration: "visible" | "invisible";
    UserLogin: "visible" | "invisible";
}
interface ComponentsContextType {
    components: ComponentsData;
    setComponents: React.Dispatch<React.SetStateAction<ComponentsData>>;
}
interface ComponentsContextProviderProps {
    children: React.ReactNode;
}
export const ComponentContext = createContext<ComponentsContextType | null>(null)
const ContextProvider: React.FC<ComponentsContextProviderProps> = (props) => {
    const [components, setComponents] = useState<ComponentsData>({
        Home: "visible",
        Trips: "invisible",
        TripDetails: "invisible",
        NewTripForm: "invisible",
        UpdateTripForm: "invisible",
        UserRegistration: "invisible",
        UserLogin: "invisible"
    })
    return (
        <ComponentContext.Provider value={{components, setComponents}}>
            {props.children}
        </ComponentContext.Provider>
    )
}
export default ContextProvider;