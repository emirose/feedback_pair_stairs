import TeamMatrix from '../teamMatrix';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return { teamMembers: state.people } 
}

const TeamList = connect(mapStateToProps)(TeamMatrix);
 export default TeamList
