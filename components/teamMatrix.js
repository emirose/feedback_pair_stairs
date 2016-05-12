import React from 'react';
import {connect} from 'react-redux';
import TeamMember from './teamMember';
import {appendToName} from '../actions.js'

let teamMatrix = ({teamMembers, appendToName}) => {
    return (
      <div> Team Members
        <div> {teamMembers.map((teamMember) => {
           return <TeamMember name={teamMember} key={teamMember} onClickBaby={appendToName} />
          }
        )}
        </div>
      </div>
    )

}
const mapStateToProps = (state) => {
  return { teamMembers: state.teamMembers }
}


const mapDispatchToProps = (dispatch) => {
  return {
    appendToName: (teamMember) => {
      dispatch(appendToName(teamMember))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(teamMatrix);
