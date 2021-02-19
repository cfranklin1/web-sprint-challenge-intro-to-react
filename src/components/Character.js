// Write your Character component here
import React from 'react';
import Info from './Info';

export default function Character(props) {
    
    const {charList} = props;


    return (
        <div className='character-div'>
            <Info name={charList.name}/>
        
        </div>
    )
}