// Write your Character component here
import React from 'react';
import Info from './Info';

export default function Character(props) {
    
    const {characters} = props;


    return (
        <div className='character-div'>
            {characters.map((character, index) => {
                return <Info key={index} character={character} />
            })}
            
        
        </div>
    )
}