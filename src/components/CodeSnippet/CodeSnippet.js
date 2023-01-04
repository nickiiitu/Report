import React from 'react'
import "./CodeSnippet.css"
import img1 from "../../images/screenshot1.svg"
import img2 from "../../images/screenshot2.svg"
import img3 from "../../images/screenshot3.svg"
import imgframe from "../../images/imgframe.svg"
import fillimg from "../../images/fillimg.svg"
import { Grid } from '@mui/material'

export const CodeSnippet = () => {


    const code = `{
        // Code Snippet 1
          "Snippet name": {
            "scope": "language1, language2" 
            "prefix": "trigger word 1",
            "body": ["your code snippet"],
            "description": "description of the code"
          },
        // Code Snippet 2
          "Snippet name": {
            "scope": "language1, language2" 
            "prefix": ["trigger word 1, trigger word 2"],
            "body": ["your code snippet"],
            "description": "description of the code"
          }
        }`
    return (
        <>
            <Grid item className='code-snippet-wrapper'>

                <Grid className='code-snippet-header'>
                    <span className='code-snippet-span' >Code Snippet</span>
                </Grid>
                <Grid className='code-content'>
                    <pre className='code-content-pre'>
                        <code className='code font-styling-text'>
                            {code}
                        </code>
                    </pre>
                </Grid>
            </Grid>

            <Grid className='final-remark-wrapper'>
                <Grid container justifyContent="center" textAlign="center" className='font-style-header-code-snippet final-remark-header-600'>
                    Final Remarks
                </Grid>
                <Grid container justifyContent="center" alignItems="center" lg={1} md={1} sm={1} className='vertical-left-header' >
                    <div className='font-style-header-code-snippet final-remark-header' >
                        Final Remarks
                    </div>
                </Grid>
                <Grid item lg={11} md={11} sm={11} className='final-remark-content'>
                    <p className=' font-styling-text'>
                        Candidate has good hands on towards c#, ASP.net MVC and SQL Server and managing web applications. His approach towards problem solving is very practical and due to his effective communication skills he is able to grab the required attention. Based on his experience candidate has a very good technical knowledge with regards to design patterns and implementation as he explained singleton pattern during the interview
                    </p>
                </Grid>
            </Grid>

            <div className='screenshots-wrapper'>
                <div className='screenshots-header'>
                    <span className='code-snippet-span'>Screenshots</span>
                </div>
                <div className='screenshots-container'>
                    <div className='screenshot-wrapper'>
                        <img src={fillimg} className="fill-img1"></img>
                        <img src={imgframe} alt="Image1" className="screenshots"></img>
                    </div>
                    <div className='screenshot-wrapper'>
                        <img src={fillimg} className="fill-img1"></img>
                        <img src={imgframe} alt="Image2" className="screenshots"></img>
                    </div>
                    <div className='screenshot-wrapper'>
                        <img src={fillimg} className="fill-img1"></img>
                        <img src={imgframe} alt="Images3" className="screenshots"></img>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <img className='footer-logo' src='https://incruiter-media.s3.ap-south-1.amazonaws.com/client1/emailTemplates/file-1657200036372-806435886.png' alt='Logo' />
            </div>
        </>
    )
}
