import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  btnType: PropTypes.string.isRequired,
};
