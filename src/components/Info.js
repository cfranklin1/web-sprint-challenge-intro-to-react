import React from 'react';

export default function Info(props) {

    const { person } = props;

    return (
        <div className='info-div'>
            <h2>{person.name}</h2>

        </div>
    );

};

