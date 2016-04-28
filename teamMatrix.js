import React from 'react';

let teamMatrix = ({teamMembers}) => {

    return <ul> 
            {teamMembers.map(person => 
                     <li key={person}> {person} </li>
            )}
            </ul>

}
export default teamMatrix;
