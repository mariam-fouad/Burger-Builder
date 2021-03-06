import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {BurgerBuilder} from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
configure({adapter: new Adapter()});

describe('<BurgerBuilder/>',()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<BurgerBuilder initialIngredient={()=>{}}/>);
  });

  it('should render BuildControls if ingredients props exist',()=>{
    wrapper.setProps({ingredients:{Meat:0}});
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });

  it("shouldn't render BuildControls if ingredients props doesn't exist",()=>{
    expect(wrapper.find(BuildControls)).toHaveLength(0);
  });

});
