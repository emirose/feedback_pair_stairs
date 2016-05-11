import React from 'react';
import {addTeamMember, addTeamMemberAsync}  from '../actions.js';
import {connect} from 'react-redux';

let AddTeamMember = ({dispatch}) => {
  let teamMemberInput;

  let onSubmit = (event) => {
    event.preventDefault();
    if(teamMemberInput.value !== '') {
      dispatch(addTeamMember(teamMemberInput.value));
      teamMemberInput.value = '';
    }
  };

  let onButtonClick = () => {
    dispatch(addTeamMemberAsync(teamMemberInput.value));
  }

  return <form onSubmit = {onSubmit}>
    <input ref={node => { teamMemberInput = node }}/>
    <input value="add team member" type='submit'/>
    <input value="add team member async" type="button" onClick = {onButtonClick}/>
    </form>
};

AddTeamMember = connect()(AddTeamMember);

export default AddTeamMember;
