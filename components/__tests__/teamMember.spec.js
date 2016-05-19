import React from 'react';
import { shallow } from 'enzyme';
import TeamMember from '../teamMember';
import { expect } from 'chai';

describe('TeamMember', () => {

	it('should render a div', () => {
		const rendered = shallow(<TeamMember />);
		expect (rendered.find('div').length).to.be.eql(1);
	});


});