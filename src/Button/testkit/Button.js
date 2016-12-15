import React from 'react';
import Button from '../Button';
import ReactTestUtils from 'react-addons-test-utils';
import $ from 'jquery';

const buttonDriverFactory = component => ({
  click: () => ReactTestUtils.Simulate.click(component),
  getButtonTextContent: () => component.textContent,
  isButtonDisabled: () => component.className.indexOf('disabled') > 0,
  doesComponentHasClass: className => component.className.indexOf(className) > 0,
  isComponentHovered: () => component.className.indexOf('hover') > 0,
  exists: () => !!component
});

const componentFactory = (props = {}) => {
  const {children, ...otherProps} = props;
  const component = ReactTestUtils.renderIntoDocument(<div><Button {...otherProps}>{children}</Button></div>);
  return component.childNodes[0];
};

const buttonTestkitFactory = ({wrapper, id}) => {
  const button = $(wrapper).find(`#${id}`)[0];
  return buttonDriverFactory(button);
};

export {buttonTestkitFactory, componentFactory, buttonDriverFactory};