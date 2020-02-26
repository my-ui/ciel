import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = ({ text }) => <button className="btn">组件按钮{text}</button>

Button.propTypes = {
  text: PropTypes.any
};

export default Button;