import React from 'react';
import {addPerson}  from './actions.js'; 
import {connect} from 'react-redux';

let AddPerson = ({dispatch}) => {
  let input;

  return <div> <input ref={node => { input = node }}/>
    <button type='button' onClick={() => {
      dispatch(addPerson(input.value));
      input.value = '';
    }} >
  Add Person!</button></div>
};

AddPerson = connect()(AddPerson);

export default AddPerson;
