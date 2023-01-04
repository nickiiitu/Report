import React from 'react'
import "./Report.css"
import arrow from "../../images/arrow.png"
import { Rad } from "../RadarChart"
import percent60 from "../../images/percent60.svg"
import percent30 from "../../images/percent30.svg"
import percent50 from "../../images/percent50.svg"
import vectortr from "../../images/Vectortr.svg"
import vectortl from "../../images/Vectortl.svg"
import vectorb from "../../images/Vectorb.svg"
import line1 from "../../images/line1.svg"
import line2 from "../../images/line2.svg"
import line3 from "../../images/line3.svg"
import line1b from "../../images/line1b.svg"
import line2b from "../../images/line2b.svg"
import line3b from "../../images/line3b.svg"
import Poor from "../../images/Poor.svg"
import Good from "../../images/Good.svg"
import Average from "../../images/Average.svg"
import GroupedprofileImg from "../../images/GroupedprofileImg.svg"
import { MultipleSeriesPieChart } from "../MultipleSeriesPieChart"
import { SpeedoMeterChart } from "../SpeedoMeterChart"
import { Grid } from '@mui/material'
export const Report = () => {
    return (
        <div>
            <div className='header'>
                <Grid className='img-div'>
                    <img className='img-logo' src='https://incruiter-media.s3.ap-south-1.amazonaws.com/client1/emailTemplates/file-1657200036372-806435886.png' alt='Logo' />
                </Grid>
                <div className='header-content-wrapper'>
                    <Grid className='blank-div'>

                    </Grid>
                    <div className='content-div'>
                        <span className='content-div-span font-style-header'> Candidate Feedback Report </span>
                    </div>
                    <button className='btn-g'>
                        Print
                    </button>
                </div>
            </div>
            <div className='report-wrapper'>
                <div className='section-1 section' >
                    <div className='tech-details-wrapper'>
                        <div className='tech-details'>
                            <p style={{ "margin-bottom": "5px" }} className="font-syle-profile"> <span className='font-style-profile-span'>Post:</span> Fullstack Developer</p>
                            <p style={{ "margin-top": "0px", "margin-bottom": "5px" }} className="font-syle-profile"><span className='font-style-profile-span'>Company:</span> Incruiter</p>
                            <p style={{ "margin-top": "0px", "margin-bottom": "5px" }} className="font-syle-profile"><span className='font-style-profile-span'>Experience:</span> 7</p>
                        </div>
                        <div className='profile'>
                            <img className='profilepic' src={GroupedprofileImg} alt="profilepic"></img>
                        </div>
                    </div>
                    <div className='profile-details'>
                        <p style={{ "margin-bottom": "5px" }} className="font-syle-profile profile-details-p1">#IN00408</p>
                        <p style={{ "margin-top": "0px", "margin-bottom": "5px" }} className="font-syle-profile profile-details-p2">Amit Bansal</p>
                        <p style={{ "margin-top": "0px", "margin-bottom": "5px" }} className="font-syle-profile profile-details-p3">9988005577     testing@email.com</p>
                    </div>
                    <div className='proxy'>
                        <div className='proxy-chart-wrapper'>
                            <div className='proxy-chart'>
                                {/* <SpeedoMeterChart /> */}
                                <img src={Poor} alt="graph" className='proxy-chart-img'></img>
                            </div>
                            <span className='proxy-rating-span'>Rating 9/10</span>
                        </div>
                        <div className='proxy-title-wrapper'>
                            <span className='proxy-title'>Suspected Proxy</span>
                        </div>
                    </div>
                </div>
                <div className='arrow-div'>
                    <img className="arrow-img" src={arrow} alt="arrow"></img>
                </div>
                <div className='recommendation'>
                    <div className='red recommendation-div'>
                        <span className='recommendation-span'> Not Recommended</span>
                    </div>
                    <div className='yellow recommendation-div'>
                        <span className='recommendation-span' style={{ "color": "black" }}>Cautiously Recommended</span>

                    </div>
                    <div className='green recommendation-div'>
                        <span className='recommendation-span'>Highly Recommended</span>

                    </div>
                </div>

                <div className='candidate-overall-skills'>
                    <div className='candidate-skills-wrapper'>
                        <span className='candidate-skills-heading'>Candidate vs. Global Skills</span>
                        <div className='candidate-skills'>
                            <Rad />
                        </div>
                    </div>
                    <div className='overAll-skills'>
                        <div className='overAll-skills-header'>
                            <span className='overAll-skills-span font-style-header'>Overall skills</span>
                        </div>
                        <div className='toplayer-ellip'>
                            <div className='toplayer-ellip-div'>
                                <img className='toplayer-ellip-img' src={percent50} alt="ellipse" />
                                <p className='toplayer-ellip-title font-style-percent' style={{ "margin": "0px" }}>Technical skills</p>
                                <p className='toplayer-ellip-percent font-style-percent' style={{ "margin": "0px" }}>
                                    80%
                                </p>
                            </div>
                            <div className='vector-wrapper'>
                                <div className='vector-tl-div'>
                                    <img className='vector-tl' src={vectortl} alt="vectortl"></img>
                                </div>
                                <div className='vector-tr-div'>
                                    <img className='vector-tl' src={vectortr} alt="vectortr"></img>
                                </div>
                            </div>
                        </div>
                        <div className='secondlayer-ellip'>
                            <div className='ellip-layer-wrapper'>

                                <div className='secondlayer-ellip-left'>
                                    <img className='toplayer-ellip-img' src={percent30} alt="ellipse" />
                                    <p className='toplayer-ellip-title font-style-percent' style={{ "margin": "0px" }}>Job skills</p>
                                    <p className='toplayer-ellip-percent font-style-percent' style={{ "margin": "0px" }}>
                                        30%
                                    </p>
                                </div>
                                <div className='vector-center-div' >
                                    <img className='vector-center' style={{ width: '150px' }} src={vectorb} alt="vectorb"></img>
                                </div>
                                <div className='secondlayer-ellip-right'>
                                    <img className='toplayer-ellip-img' src={percent60} alt="ellipse" />
                                    <p className='toplayer-ellip-title font-style-percent' style={{ "margin": "0px" }}>Soft skills</p>
                                    <p className='toplayer-ellip-percent font-style-percent' style={{ "margin": "0px" }}>
                                        60%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='soft-phychological-skills'>
                    <div className='soft-skills-wrapper'>
                        <div className='soft-skills-div'>
                            <span className='soft-skills-span'>Soft Skills</span>
                        </div>
                        <div className='soft-skills-graph-wrapper' >

                            <div className='soft-skills'>
                                <MultipleSeriesPieChart backGroundColor={[
                                    "#133F7D",
                                    "rgba(19, 63, 125, 0.5)",
                                ]} />
                                <img className='m1-img' src={line1} ></img>
                                <img className='m2-img' src={line2} ></img>
                                <img className='m3-img' src={line3} ></img>
                                <div className='marking-1 marking-font-style'>
                                    <p style={{ "margin": "0px" }}>Confidence</p>
                                    <p style={{ "margin": "0px" }}><span className='marking-rating-span'>8</span>/10</p>
                                </div>

                                <div className='marking-2 marking-font-style'>
                                    <p style={{ "margin": "0px" }}>Pressure handling</p>
                                    <p style={{ "margin": "0px" }}><span className='marking-rating-span'>7</span>/10</p>
                                </div>

                                <div className='marking-3 marking-font-style'>
                                    <p style={{ "margin": "0px" }}>Communication</p>
                                    <p style={{ "margin": "0px" }}><span className='marking-rating-span'>6</span>/10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='phychological-skills-wrapper'>
                        <div className='phychological-skills-div'>
                            <span className="psychological-skills-span">Psychological Skills</span>
                        </div>
                        <div className='soft-skills-graph-wrapper'>

                            <div className='psychological-skills soft-skills'>
                                <MultipleSeriesPieChart
                                    backGroundColor={["rgba(17, 178, 184, 0.8)", "rgba(17, 178, 184, 0.5)"]}
                                />
                                <img className='m1-img-phy' src={line1b} ></img>
                                <img className='m2-img-phy' src={line2b} ></img>
                                <img className='m3-img-phy' src={line3b} ></img>
                                <div className='marking-1-phy marking-font-style'>
                                    <p style={{ "margin": "0px" }}>Confidence</p>
                                    <p style={{ "margin": "0px" }}><span className='marking-rating-span'>8</span>/10</p>
                                </div>

                                <div className='marking-2-phy marking-font-style'>
                                    <p style={{ "margin": "0px" }}>Pressure handling</p>
                                    <p style={{ "margin": "0px" }}><span className='marking-rating-span'>7</span>/10</p>
                                </div>

                                <div className='marking-3-phy marking-font-style'>
                                    <p style={{ "margin": "0px" }}>Communication</p>
                                    <p style={{ "margin": "0px" }}><span className='marking-rating-span'>6</span>/10</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
