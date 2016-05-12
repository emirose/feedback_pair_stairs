import React from 'react';

let TeamMember = (props) => {

    let teamMemberBoxStyles = {
      border: '1px solid black',
      padding: '10px'
    };

    return <div style={teamMemberBoxStyles} onClick={(event) => props.onClickBaby(props.name) }> {props.name} </div>

}

export default TeamMember;

