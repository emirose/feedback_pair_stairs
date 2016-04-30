import TeamMatrix from '../components/teamMatrix';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return { teamMembers: state.teamMembers } 
}

const TeamList = connect(mapStateToProps)(TeamMatrix);
 export default TeamList
