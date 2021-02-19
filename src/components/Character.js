// Write your Character component here
import React from 'react';
import Info from './Info';

export default function Character(props) {
    
    const {characters} = props;


    return (
        <div className='character-div'>
            {characters.map((person) => {
                return <Info key={person.id} person={person} />
            })}
            
        
        </div>
    )
}