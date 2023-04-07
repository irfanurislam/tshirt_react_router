import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>aunty</h2>
           <section className='flex'>
           <Cousin>abir</Cousin>
            <Cousin ring={ring} hasFriend={true}>Nibir</Cousin>
           </section>
        </div>
    );
};

export default Aunty;