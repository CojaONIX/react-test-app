import {useContext} from "react";
import {PaidContext} from "../App";
import {CURRENCIES} from "../Utils/CurrencyUtil";


const PayPal = () => {

    const paid = useContext(PaidContext);

    return (
        <>
            {!paid.isUserCreated &&
                <form>
                    <input onInput={e => paid.updateUsername(e.currentTarget.value)} placeholder="Username"/>
                    <input onInput={e => paid.updateMoney(e.currentTarget.value)} placeholder="Money"/>
                    <button type="button" onClick={paid.saveUser}>Kreiraj Korisnika</button>
                </form>
            }

            <h4>{paid.currency} - {paid.amount} x {CURRENCIES[paid.currency]} = {paid.amount * CURRENCIES[paid.currency]}</h4>

            <select onChange={e => paid.updateCurrency(e.currentTarget.value)}>
                {Object.keys(CURRENCIES).map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>

            <input onInput={e => paid.updateAmount(e.currentTarget.value)} placeholder="Amount"/>


        </>

    );
}

export default PayPal;