import './App.css';
import Payment from "./Components/Payment";
import {createContext, useEffect, useReducer, useState} from "react";
import {userReducer, loadUserState} from "./Reducers/User";

export const PaidContext = createContext();

function App() {

    const [userState, dispatch] = useReducer(userReducer, loadUserState());

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

    useEffect( () => {
        if(userState.isUserCreated){
            localStorage.setItem("userState", JSON.stringify(userState));
        }
    }, [userState]);

    return (
        <>
            <PaidContext.Provider value={{currency, amount, updateCurrency, updateAmount}}>
                {userState.isUserCreated
                    ? JSON.stringify(userState)
                    :
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
