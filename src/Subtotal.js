import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import { getBascketTotal } from "./reducer";

function Subtotal(props) {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items) :{" "}
                            <strong>{` $ ${getBascketTotal(basket)}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}

                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
