import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import AddTeamMember from './components/addTeamMember.js';
import TeamList from './containers/teamList.js';
import reducers from './reducers.js';

let store = createStore(reducers);

let AppComponent = React.createClass({

  render: ()=> {
   return <div> Team Feedback Matrix
    <AddTeamMember/>
    <TeamList/>
    </div>
  }
});

ReactDOM.render(<Provider store={store}>
                <AppComponent store={store}/>
                </Provider>,
                document.getElementById('app'));
