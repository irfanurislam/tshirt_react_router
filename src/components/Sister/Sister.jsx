import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext)

    return (
        <div>
            <h2>sister</h2>
            <p>sister Money{money}</p>
            {/* <button onClick={() => setMoney(money - 1000)}>sister money</button> */}
        </div>
    );
};

export default Sister;