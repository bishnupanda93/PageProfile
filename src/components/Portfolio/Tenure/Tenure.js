import React from 'react';
import classes from './Tenure.module.scss'
const Tenure = props =>(
<p className={classes['tenure-wrapper']}>{props.startDate}&nbsp;-&nbsp;{props.endDate}</p>
)
export default Tenure;