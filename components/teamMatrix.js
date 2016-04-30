import React from 'react';

let teamMatrix = ({teamMembers}) => {


    return( 
         <div> Team Members
            <ul> 
            {teamMembers.map(teamMember => 
                     <li key={teamMember}> {teamMember} </li>
            )}
            </ul>
         </div>)

}
export default teamMatrix;
