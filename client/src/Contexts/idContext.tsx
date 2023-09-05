import React, {createContext, useState} from "react";

interface ComponentsContextProviderProps {
    children: React.ReactNode;
}
interface IdContextType {
    id: string;
    setId: React.Dispatch<React.SetStateAction<string>>;
}
export const IdContext = createContext<IdContextType | null>(null);
const IdContextProvider: React.FC<ComponentsContextProviderProps> = (props) => {
    const [id, setId] = useState<string>('')
    return (
        <IdContext.Provider value={{id, setId}}>
            {props.children}
        </IdContext.Provider>
    )
}
export default IdContextProvider;