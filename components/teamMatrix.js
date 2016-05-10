import React from 'react';
import {connect} from 'react-redux';

let teamMatrix = ({teamMembers}) => {

    let teamMemberBoxStyles = {
      border: '1px solid black',
      padding: '10px'
    };

    return (
      <div> Team Members
        <div> {teamMembers.map((teamMember) => {
           return <div style={teamMemberBoxStyles} key={teamMember}> {teamMember} </div>
          }
        )}
        </div>
      </div>
    )

}
const mapStateToProps = (state) => {
  return { teamMembers: state.teamMembers }
}

export default connect(mapStateToProps)(teamMatrix);
