import classes from './SubTitle.module.scss'
import React from 'react';
const SubTitle =props=>{
    const wrapper = [classes['subtitle-wrapper'],'row no-gutters'];
    return(
    <div className={wrapper.join(" ")}>
        <div className="col col-sm-auto">
            <span className= {classes['bold-green-text']}>{props.role}</span>
        </div>
        <div className="d-none d-sm-flex">&nbsp;|&nbsp;</div>
        <div className="w-100 d-flex d-sm-none"></div>
        <div className="col col-sm-auto">
        <span className={classes['muted-grey-text']}>{props.organisation}</span>
        </div>
    </div>
    )
}
export default SubTitle;