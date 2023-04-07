import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    
    return (
        <div>
            <h2>special</h2>
            <p><small>Ring: {ring}</small></p>
            <p><small>gold {angti}</small></p>
        </div>
    );
};

export default Special;<h2>special</h2>