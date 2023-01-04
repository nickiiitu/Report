import React from 'react'
import "./SoftSkills.css"
import { Grid } from '@mui/material'
export const SoftSkills = () => {
    return (
        <Grid item className='wrapper'>
            <Grid className='soft-skill-wrapper' >
                <Grid container justifyContent="center" textAlign="center" className='font-style-header-soft-skill soft-skill-header-600'>
                    Soft Skills
                </Grid>
                <Grid container justifyContent="center" alignItems="center" lg={1} md={1} sm={1} className='soft-skill-header-outer'>
                    <div className='soft-skill-header font-style-header-soft-skill'>
                        Soft Skills
                    </div>
                </Grid>
                <Grid item lg={11} md={11} sm={11} xs={12} className='soft-skill-content'>
                    <p className='font-style-soft-skill'><strong>Confidence:</strong> Somewhat likely to have 10% confidence in one's own skills, abilities, and knowledge.</p>
                    <p className='font-style-soft-skill'><strong>Pressure Handling:</strong> You can completely rely on the one to oversee all the unexpected work pressure before deadlines, helping to maintain an exceptional client experience.</p>
                    <p className='font-style-soft-skill' >
                        <strong>Communication Skills:</strong> Likely to have very strong effective communication skills to deal with even international clients fluently.
                    </p>
                </Grid>
            </Grid>
            <Grid className='psycological-skill-wrapper' >
                <Grid container justifyContent="center" textAlign="center" alignItems="center" className='psycological-skill-header-600 font-style-header-soft-skill'>
                    Psychological Skill
                </Grid>
                <Grid lg={11} sm={11} md={11} xs={12} className="psycological-skill-content">
                    <p className='font-style-soft-skill'><strong>Approach & Attitude:</strong> The one is to know all ins and outs of implementing cutting-edge strategies & well-qualified to work with full dedication. You don't need to invest in one's training program.</p>
                    <p className='font-style-soft-skill'><strong>Problem Solving:</strong> Out-of-box strategic problem-solving skills to address any challenging situation. One will always be the winner.</p>
                    <p className='font-style-soft-skill'><strong>Result Orientation: </strong>Somewhat likely to be fantastic level of enthusiasm while working on challenging tasks and may at times demonstrate a sense of urgency to accomplish goals</p>
                </Grid>
                <Grid lg={1} sm={1} md={1} container justifyContent="center" alignItems="center" className='psycological-skill-header-outer'>
                    <div className='psycological-skill-header font-style-header-soft-skill'>
                        Psychological Skill
                    </div>
                </Grid>

            </Grid>
            <Grid className='screening-ques-wrapper'>
                <Grid className='screening-ques-header font-style-header-screening'>
                    Screening Questions
                </Grid>
                <Grid className='ques-ans-wrapper'>
                    <Grid className='ques font-style-soft-skill'>
                        1. What is Agile Methodologies?
                    </Grid>
                    <Grid className='ans font-style-soft-skill'>
                        He worked in Springboot mostly in the backend side.
                    </Grid>
                    <Grid className='ques font-style-soft-skill'>
                        2. What frameworks have you worked with?
                    </Grid>
                    <Grid className='ans font-style-soft-skill'>
                        He worked in Springboot mostly in the backend side.
                    </Grid>
                    <Grid className='ques font-style-soft-skill'>
                        3. What frameworks have you worked with?
                    </Grid>
                    <Grid className='ans font-style-soft-skill'>
                        He worked in Springboot mostly in the backend side.
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}
