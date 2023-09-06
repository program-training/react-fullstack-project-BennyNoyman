import {ComponentContext} from "../Contexts/ComponentsContext";
import {useContext, useState} from "react";
import './visibility.css';
interface User {
    email: string;
    password: string;
}
const submit = async (user) => {
  const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'post', body: JSON.stringify(user), headers:{'content-Type': 'application/json'}})
    const res =await response.json();
  console.log(res.message);
}
export default function UserRegistration() {
    const Components = useContext(ComponentContext);
    if (!Components) return;
    const {components, setComponents} = Components;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState<User>({email: '', password:''})
    return(
        <div className={components.UserRegistration}>
            <form onSubmit={() => {submit(user)}}>
                <label>
                    Email:
                    <input onChange={(event) => {setUser({...user, email: event.target.value})}}/>
                </label>
                <label>
                    Password:
                    <input onChange={(event) => {setUser({...user, password: event.target.value})}}/>
                </label>
                <button>Create User</button>
            </form>
            <button onClick={() => setComponents({...components, Home: "visible", UserRegistration: "invisible"})}>Home</button>
        </div>
    )
}