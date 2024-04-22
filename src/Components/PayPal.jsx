import {useContext} from "react";
import {PaidContext} from "../App";
import {CURRENCIES} from "../Utils/CurrencyUtil";


const PayPal = () => {

    const paid = useContext(PaidContext);

    return (
        <>
            <h4>{paid.currency} - {paid.amount} x {CURRENCIES[paid.currency]} = {paid.amount * CURRENCIES[paid.currency]}</h4>

            <input onInput={e => paid.updateAmount(e.currentTarget.value)} placeholder="Amount"/>

            <select onChange={e => paid.updateCurrency(e.currentTarget.value)}>
                {Object.keys(CURRENCIES).map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </>
    );
}

export default PayPal;