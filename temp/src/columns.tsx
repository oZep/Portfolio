import React from 'react';
import Left from './left';
import Right from './right';
import Middle from './middle';


const Columns: React.FC = () => {
    return (
        <div className='column-container'>
            <div className='columns'>
                <Left />
                <Middle />
                <Right />
            </div>
        </div>
    );
};

export default Columns;