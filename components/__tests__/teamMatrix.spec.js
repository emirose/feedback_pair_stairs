import React from 'react';
import { shallow, mount } from 'enzyme';
import TeamMatrix from '../teamMatrix';
import {teamMatrix as DumbComponent} from '../teamMatrix';
import { expect } from 'chai';
import {Provider} from 'react-redux';
import  configureStore  from 'redux-mock-store';

describe('TeamMatrix', () => {

	it('should render the correct number teamMembers', () => {
    const mockStore = configureStore();
    const store = mockStore({teamMembers:['dontcare', 'dontcare1']});
    let rendered = mount(<Provider store={store}><TeamMatrix/></Provider>);
		expect (rendered.find('TeamMember').length).to.be.eql(2);
	});

	it('should render teamMember with the right props', () => {
    const mockStore = configureStore();
    const store = mockStore({teamMembers:['John']});
    let rendered = mount(<Provider store={store}><TeamMatrix/></Provider>);
		expect (rendered.find('TeamMember').get(0).props.name).to.be.eql('John');
	});

  describe('without store', () => {
    it('should render the correct number of teamMembers', () => {
      let teamMembers = ['1', '2'];
      const rendered = shallow(<DumbComponent teamMembers={teamMembers}/>);
      expect (rendered.find('TeamMember').length).to.be.eql(2);

    });
  });




});

