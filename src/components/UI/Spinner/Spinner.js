import React from 'react';
import classes from './Spinner.css'

//Google CSS Spinner : https://projects.lukehaas.me/css-loaders/

const spinner = ()=>(
  <div className={classes.Loader}>Loading...</div>
);

export default spinner;