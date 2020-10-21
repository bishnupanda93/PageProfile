import Title from './Title/Title.js'
import React from 'react';
import classes from './Portfolio.module.scss';
import SubTitle from './SubTitle/SubTitle';
import Tenure from './Tenure/Tenure';
const Portfolio =(props)=>{
    const experience=  (
        props.experience.map(({role,organisation,tenureStart,tenureEnd,experienceDetail},index)=>(
            <div key={index}>
                <SubTitle organisation={organisation} role={role}></SubTitle>
                <Tenure startDate={tenureStart} endDate={tenureEnd}></Tenure>
                <ul className={classes['skills-list']}>
                    {experienceDetail.map((expDetail,j) => <li key={j}><span>{expDetail}</span></li>)}
                </ul>
            </div>
            )))
            const listClasses = [classes['skills-list'],'row no-gutters'];
    
    return(
        <div className={classes['portfolio-container']}>
            <div>
                <Title value="Summary" icon="fa fa-bars"></Title>
                <p className={classes['summary-text']}>{props.summary}</p>
            </div>
            <div className="mt-4 pt-2">
                <Title value="Skills" icon="fa fa-wrench"></Title>
                <ul className={listClasses.join(" ")}>
                   { props.skills.map((skill,index)=>
                   (<li key={index} className="col-sm-4"><span>{skill}</span></li>))}
                </ul>
            </div>
            <div className="mt-4 pt-2">
                <Title value="Experience" icon="fa fa-briefcase"></Title>
                <SubTitle organisation="Tata Consultancy Services" role="Automation Tester"></SubTitle>
                <Tenure startDate="Mar 2016" endDate="PRESENT"></Tenure>
                <p className={classes['summary-text']}>System Engineer at TCS and following are accounts/clients’ projects that I have worked upon:</p>
                {experience}
            </div>
            <div className="mt-4 pt-2">
                <Title value="Education" icon ="fa fa-university"></Title>
                <SubTitle organisation="Biju Pattnaik University of Technology, Odisha" role="Bachlor in Technology"></SubTitle>
                <Tenure startDate="2011" endDate="2015"></Tenure>
            </div>
        </div>
    )

}
export default Portfolio;