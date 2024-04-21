import './App.css';
import Payment from "./Components/Payment";
import {createContext, useState} from "react";

export const CurrencyContext = createContext();
export const AmountContext = createContext();

function App() {

    const [currency, setCurrency] = useState("USD");
    const [amount, setAmount] = useState(0);

    const updateCurrency = (currency) => {
        setCurrency(currency);
    }

    const updateAmount = (value) => {
        setAmount(value);
    }


    return (
        <>
            <CurrencyContext.Provider value={currency}>
                <AmountContext.Provider value={amount}>
                    <Payment/>
                </AmountContext.Provider>
            </CurrencyContext.Provider>

            <input onInput={e => updateAmount(e.currentTarget.value)}/>
            <button onClick={() => updateCurrency('EUR')}>EUR</button>
            <button onClick={() => updateCurrency('USD')}>USD</button>
        </>
    );
}

export default App;
