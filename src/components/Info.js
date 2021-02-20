import React from 'react';

export default function Info(props) {

    const { character } = props;

    return (
        <div className='info-div'>
            <div className='name-div'>
                <h3>{character.name}</h3> 
            </div>
            <div className='more-info'>
                <button className='info-button'>{character.birth_year}</button>
            </div>
            

        </div>
    );

};

