import './App.css';
import Payment from "./Components/Payment";
import {createContext, useState} from "react";

export const PaidContext = createContext();

function App() {

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
            <PaidContext.Provider value={{currency, amount, username, money, isUserCreated, updateCurrency, updateAmount, updateUsername, updateMoney, saveUser}}>
                <Payment/>
            </PaidContext.Provider>
        </>
    );
}

export default App;
