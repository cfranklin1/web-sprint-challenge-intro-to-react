import React from 'react';

export default function Info(props) {

    const { name } = props;

    return (
        <div className='info-div'>
            <div className='character-name'>
                <p>{name}</p>
            </div>

        </div>
    );

};

