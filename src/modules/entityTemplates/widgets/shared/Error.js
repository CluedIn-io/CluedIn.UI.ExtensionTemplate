import React from 'react';
import Alert from 'uxi/Alert';

const Error = ({ children = "An error has occurred" }) =>
  <Alert type="error">{children}</Alert>;

export default Error;
