import React from 'react';
import classes from './Header.module.scss';
const Header = (props)=>{
    return(
        <div className={[classes.header, 'row pb-4 px-4 px-sm-5 pt-5 mb-4'].join(" ")}>
            <div className="col-md-9 d-flex flex-column-reverse">
            <h1 className="text-uppercase">{props.personDetails.name}</h1>
            </div>
            <div className="col-md-3 pt-2">
                <ul className={classes['header-list-group-item']}>
                    <li>{props.personDetails.address} <i className={[classes['icon-style'],'fa fa-home ml-1'].join(" ")} aria-hidden="true"></i></li>
                    <li>{props.personDetails.phone} <i className={['fa fa-phone ml-1', classes['icon-style']].join(" ")}></i></li>
                    <li>{props.personDetails.email}<i className={[classes['icon-style'],'fa fa-envelope ml-1'].join(" ")}></i></li>
                    <li><a href={props.personDetails.linkedIn} className={classes['linkedIn-style']}>LinkedIn<i className={[classes['icon-style'],'fa fa-linkedin ml-1'].join(" ")}></i></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;

