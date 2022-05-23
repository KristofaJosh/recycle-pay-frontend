import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, children }) => {
  return <p>{text || children}</p>;
};

const Heading = ({ text, children, level, ...props }) => {
  return React.createElement(`h${level || 1}`, { ...props }, text || children);
};

Text.Heading = Heading;

Text.propTypes = {
  text: PropTypes.string,
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
