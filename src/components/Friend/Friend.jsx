import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = ({ring}) => {
    const mangti = useContext(RingContext)
    return (
        <div>
            <h2>friend</h2>
            {
                ring && <p><small>ring : daomond</small></p>
            }
            {
                mangti && <p>gold: ring</p>
            }
        </div>
    );
};

export default Friend;