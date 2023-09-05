import Home from "./Components/Home";
import Trips from "./Components/Trips";
import TripDetails from "./Components/TripDetails";
import NewTripForm from "./Components/NewTripForm";
import UpdateTripForm from "./Components/UpdateTripForm";
import UserRegistration from "./Components/UserRegistration";
import UserLogin from "./Components/UserLogin";
import ContextProvider from "./Contexts/ComponentsContext";
import IdContextProvider from "./Contexts/idContext";

import './App.css'

function App() {


  return (
    <>
      <ContextProvider>
        <Home/>
          <IdContextProvider>
              <Trips/>
              <TripDetails/>
          </IdContextProvider>
        <NewTripForm/>
        <UpdateTripForm/>
        <UserRegistration/>
        <UserLogin/>
      </ContextProvider>

    </>
  )
}

export default App
