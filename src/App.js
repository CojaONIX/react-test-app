import './App.css';
import Payment from "./Components/Payment";
import {createContext, useReducer, useState} from "react";
import {userReducer, initialUserState} from "./Reducers/User";

export const PaidContext = createContext();

function App() {

    const [userState, dispatch] = useReducer(userReducer, initialUserState);

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState(0);

    const updateCurrency = (currency) => {
        setCurrency(currency);
    }

    const updateAmount = (value) => {
        setAmount(value);
    }

    const saveUser = () => {
        if(!(userState.username.trim() && userState.money)){
            return;
        }

        dispatch({type: 'SET_USER_CREATED', payload: true});
    }

    return (
        <>
            <PaidContext.Provider value={{currency, amount, updateCurrency, updateAmount}}>
                {!userState.isUserCreated &&
                    <form>
                        <input onInput={e => dispatch({type: 'SET_USERNAME', payload: e.currentTarget.value})} placeholder="Username"/>
                        <input onInput={e => dispatch({type: 'SET_MONEY', payload: e.currentTarget.value})} placeholder="Money"/>
                        <button type="button" onClick={saveUser}>Kreiraj Korisnika</button>
                    </form>
                }

                <Payment/>
            </PaidContext.Provider>
        </>
    );
}

export default App;
