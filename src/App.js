import './App.css';
import Payment from "./Components/Payment";
import {createContext, useState} from "react";

export const PaidContext = createContext();

function App() {

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState(0);

    const updateCurrency = (currency) => {
        setCurrency(currency);
    }

    const updateAmount = (value) => {
        setAmount(value);
    }


    return (
        <>
            <PaidContext.Provider value={{currency, amount, updateCurrency, updateAmount}}>
                <Payment/>
            </PaidContext.Provider>
        </>
    );
}

export default App;
