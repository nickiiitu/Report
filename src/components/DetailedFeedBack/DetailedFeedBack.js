import React from 'react'
import "./DetailedFeedBack.css"
import { Grid } from '@mui/material';
import mandatoryskillheader from "../../images/mandatory-skill-header.svg";
export const DetailedFeedBack = () => {
    return (
        <Grid container className='feedback-wrapper'>
            <Grid container justifyContent="center" className='feedback-header'>
                Detailed Feedback
            </Grid>
            {/* <div className='container-1'>
                <div className='con-1 '>
                    <div className='title-1'>Mandatory Skills</div>
                </div>
                <div className='con-2'></div>
            </div> */}
            <Grid className='mandatory-skills-wrapper'>
                <Grid container justifyContent="center" textAlign="center" className='font-style-header-detailed title-600'>
                    Mandatory Skills

                </Grid>
                <Grid lg={1} md={1} sm={1} container justifyContent="center" alignItems="center" className='mandatory-skills-outer-wrapper'>
                    <div className='font-style-header-detailed title-1' >
                        Mandatory Skills
                    </div>
                </Grid>
                <Grid item lg={11} md={11} sm={11} xs={12} className='mandatory-skills-content font-style-detailed-text'>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Spring Boot:</strong>  He worked in Springboot mostly in the backend side. Ques; which version of java worked in java? Can explain lambda expression in Java? What are important methods in stream APIs?</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>JAVA:</strong>  He worked in Java mostly in the backend side. Ques; which version of java worked in
                        java? Can explain lambda expression in Java? What are important methods in stream APIs?</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Hibernate:</strong>  He worked in Hibernate mostly in the backend side. Ques; which version of java worked in java? Can explain lambda expression in Java? What are important methods in stream APIs?</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Mircroservice:</strong>  He worked in Mircroservices.</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Javascript:</strong>  He worked in Mircroservices.</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Android:</strong>  He worked in Mircroservices.</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Android:</strong>  He worked in Mircroservices.</p>
                </Grid>
            </Grid>

            <Grid justifyContent="space-between" className='opyional-skills-wrapper' >
                <Grid container justifyContent="center" textAlign="center" alignItems="center" className='optional-skills-outer-wrapper-600 font-style-header-detailed'>
                    Optional Skills
                </Grid>
                <Grid item lg={11} md={11} sm={11} xs={12} className='opyional-skills-content font-style-detailed-text'>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Angular:</strong>  He worked in Angular mostly in the backend side. Ques; which version of java worked in java? Can explain lambda expression in Java? What are important methods in stream APIs?</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>React:</strong>  He worked in Java mostly in the backend side. Ques; which version of java worked in java? Can explain lambda expression in Java? What are important methods in stream APIs?</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Aws:</strong>  He worked in Hibernate mostly in the backend side. Ques; which version of java worked in java? Can explain lambda expression in Java? What are important methods in stream APIs?</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Azure:</strong>  He worked in Mircroservices.</p>
                    <p style={{ "margin": "10px 0", width: "90%" }}><strong>Google Cloud:</strong>  He worked in Mircroservices.</p>
                </Grid>
                <Grid lg={1} md={1} sm={1} container justifyContent="center" alignItems="center" className='optional-skills-outer-wrapper'>
                    <div className='optional-skills-header font-style-header-detailed'>
                        Optional Skills
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}
