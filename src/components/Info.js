import React from 'react';

export default function Info(props) {

    const { character } = props;

    return (
        <div className='info-div'>
            <h3>{character.name}</h3>

        </div>
    );

};

