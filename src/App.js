import './App.css';
import Payment from "./Components/Payment";
import {createContext, useState} from "react";

export const PaidContext = createContext();

function App() {

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState(0);
    const [username, setUsername] = useState(null);
    const [money, setMoney] = useState(null);

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
        console.log(username, money, 'radi');

    }

    return (
        <>
            <PaidContext.Provider value={{currency, amount, username, money, updateCurrency, updateAmount, updateUsername, updateMoney, saveUser}}>
                <Payment/>
            </PaidContext.Provider>
        </>
    );
}

export default App;
