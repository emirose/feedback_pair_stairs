import React from 'react';
import {addTeamMember}  from '../actions.js'; 
import {connect} from 'react-redux';

let AddTeamMember = ({dispatch}) => {
  let teamMemberInput;

  let onSubmit = (event) => {
    event.preventDefault();
    dispatch(addTeamMember(teamMemberInput.value));
    teamMemberInput.value = '';
  };

  return <form onSubmit = {onSubmit}>
    <input ref={node => { teamMemberInput = node }}/>
    <input value="add team member" type='submit'/></form>
};

AddTeamMember = connect()(AddTeamMember);

export default AddTeamMember;
