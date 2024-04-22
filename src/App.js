import './App.css';
import Payment from "./Components/Payment";
import {createContext, useReducer, useState} from "react";
import {userReducer, initialUserState} from "./Reducers/User";

export const PaidContext = createContext();

function App() {

    const [state, dispatch] = useReducer(userReducer, initialUserState);

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState(0);
    const [username, setUsername] = useState('');
    const [money, setMoney] = useState(null);
    const [isUserCreated, setIsUserCreated] = useState(false);

    const updateCurrency = (currency) => {
        setCurrency(currency);
    }

    const updateAmount = (value) => {
        setAmount(value);
    }

    const updateUsername = (name) => {
        setUsername(name);
    }

    const updateMoney = (money) => {
        setMoney(parseInt(money));
    }

    const saveUser = () => {
        if(!(username.trim() && money)){
            return;
        }

        setIsUserCreated(true);
    }

    return (
        <>
            <PaidContext.Provider value={{currency, amount, updateCurrency, updateAmount}}>
                {!isUserCreated &&
                    <form>
                        <input onInput={e => updateUsername(e.currentTarget.value)} placeholder="Username"/>
                        <input onInput={e => updateMoney(e.currentTarget.value)} placeholder="Money"/>
                        <button type="button" onClick={saveUser}>Kreiraj Korisnika</button>
                    </form>
                }

                <Payment/>
            </PaidContext.Provider>
        </>
    );
}

export default App;
