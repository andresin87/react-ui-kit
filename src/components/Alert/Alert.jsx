import React from 'react';
import PropTypes from 'react-proptypes';
const cn = require('classnames/bind');

import styles from './Alert.css';
const cx = cn.bind(styles);

const AlertComponent = ({ message = 'this is an alert' }) => (
  <div className={cx(styles.Alert)}>
    <span>{message}</span>
  </div>
);

StatelessComponent.propTypes = {
  message: PropTypes.string,
};

export default AlertComponent;
