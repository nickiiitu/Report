import React, { useEffect, useState, useRef } from 'react'
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
import logo from "../../images/logo.svg"
import Poor from "../../images/Poor.svg"
import Good from "../../images/Good.svg"
import Average from "../../images/Average.svg"
import MaleAvatar from "../../images/MaleAvatar.svg"
import GroupedprofileImg from "../../images/GroupedprofileImg.svg"
import ProfileTabVeiw from "../../images/PrfileTabVeiw.svg"
import ProfileMobileVeiw from "../../images/ProfileMobileVeiw.svg"
import { MultipleSeriesPieChart } from "../MultipleSeriesPieChart"
import Arrow from "../../images/Arrow.svg"
import { SpeedoMeterChart } from "../SpeedoMeterChart"
import { Grid } from '@mui/material'
// import { savePDF } from "@progress/kendo-react-pdf";



export const Report = () => {
    // const [isDownload, setIsDownload] = useState(false);

    // const inputRef = useRef(null)

    // useEffect(() => {
    //     if (isDownload) {
    //         let element = inputRef.current;
    //         savePDF(element, {
    //             paperSize: "auto",
    //         });
    //         setIsDownload(false);
    //     }
    // }, [isDownload]);

    const handlePrint = () => {
        console.log("click")
        // setIsDownload(true)
    }

    return (
        <div >
            < div className='header' >
                <Grid className='img-div'>
                    <img className='img-logo' src={logo} alt='Logo' />
                </Grid>
                <div className='header-content-wrapper' >
                    <Grid className='blank-div'>
                    </Grid>
                    <div className='content-div' >
                        <span className='content-div-span font-style-header'>Candidate Feedback Report </span>
                    </div>
                    <button className='btn-g' onClick={handlePrint}>
                        Print
                    </button>
                </div>
            </div >
            <div className='report-wrapper'>
                {/* desktop veiw of profile component */}
                <div className='desktop-veiw'>
                    <Grid container justifyContent='space-between' className='section-1 section'>
                        <Grid item sm={12} md={6} lg={6}>
                            <Grid container justifyContent='center' className='tech-details-wrapper'>
                                <div>
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
                                    <span className="font-syle-profile profile-details-p1">#IN00408</span>
                                    <span className="font-syle-profile profile-details-p2">Amit Bansal</span>
                                    <span className="font-syle-profile profile-details-p3">9988005577     testing@email.com</span>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <div className='proxy'>
                                <div className='proxy-chart-wrapper'>
                                    <div className='proxy-chart'>
                                        <img src={Poor} alt="graph" className='proxy-chart-img'></img>
                                    </div>
                                    <span className='proxy-rating-span'>Rating 9/10</span>
                                </div>
                                <div className='proxy-title-wrapper'>
                                    <span className='proxy-title'>Suspected Proxy</span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
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
                </div>
                {/* Tab veiw for profile component */}
                <Grid container justifyContent='space-between' className='tab-view'>
                    <Grid item sm={12} md={6} lg={6}>
                        <Grid container justifyContent='center' className='tech-details-wrapper' style={{ position: "relative" }}>
                            <div>
                                <div className='tech-details'>
                                    <p style={{ "margin-bottom": "5px" }} className="font-syle-profile"> <span className='font-style-profile-span'>Post:</span> Fullstack Developer</p>
                                    <p style={{ "margin-top": "0px", "margin-bottom": "5px" }} className="font-syle-profile"><span className='font-style-profile-span'>Company:</span> Incruiter</p>
                                    <p style={{ "margin-top": "0px", "margin-bottom": "5px" }} className="font-syle-profile"><span className='font-style-profile-span'>Experience:</span> 7</p>
                                </div>
                                <div className='profile'>
                                    <img className='profilepic' src={ProfileTabVeiw} alt="profilepic"></img>
                                </div>
                            </div>
                            <div className='profile-details'>
                                <span className="font-syle-profile profile-details-p1">#IN00408</span>
                                <span className="font-syle-profile profile-details-p2">Amit Bansal</span>
                                <span className="font-syle-profile profile-details-p3">9988005577     testing@email.com</span>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} marginTop={10} >
                        <div className='proxy'>
                            <div className='proxy-chart-wrapper'>
                                <div className='proxy-chart'>
                                    <img src={Poor} alt="graph" className='proxy-chart-img'></img>
                                </div>
                                <span className='proxy-rating-span'>Rating 9/10</span>
                            </div>
                            <div className='proxy-title-wrapper'>
                                <span className='proxy-title'>Suspected Proxy</span>
                            </div>
                        </div>
                        <Grid container justifyContent='center' className='mobile-view-recommendation'>
                            <Grid item xs={12}>
                                <div className='arrow-div'>
                                    <img className="arrow-img" src={arrow} alt="arrow"></img>
                                </div>
                                <div className='recommendation'>
                                    <div className='red recommendation-div'>
                                    </div>
                                    <div className='yellow recommendation-div'>
                                    </div>
                                    <div className='green recommendation-div'>
                                    </div>
                                </div>
                                <div className='mobile-recommendation-wrapper'>
                                    <div style={{ justifyContent: 'space-around', display: 'flex', width: "90%" }}>
                                        <div className='recommendation-title'>
                                            Not Recommended
                                        </div>
                                        <div className='recommendation-title'>
                                            Cautiously Recommended
                                        </div>
                                        <div className='recommendation-title'>
                                            Highly Recommended
                                        </div>

                                    </div>
                                </div>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={11} sm={6} md={6} lg={6} marginTop={10} className="tab-veiw-reccomendation">
                        <Grid container justifyContent='space-between' padding={6}>
                            <Grid item sm={1}>
                                <div className='rating-arrow'>
                                    <img className='rating-arrow-tab' src={Arrow} alt="profilepic"></img>
                                </div>
                            </Grid>
                            <Grid item sm={11}>
                                <Grid container justifyContent='center' textAlign="center">
                                    <Grid item sm={10} style={{ backgroundColor: "#E96F68", color: '#FFFFFF' }} className="rating-button">
                                        <span className='rating-name'> Not Recommended</span>
                                    </Grid>
                                    <Grid item sm={10} style={{ backgroundColor: "#F5E659", color: '#626262' }} className="rating-button">
                                        <span className='rating-name'>Cautiously Recommended</span>
                                    </Grid>
                                    <Grid item sm={10} style={{ backgroundColor: "#61BE52", color: '#FFFFFF' }} className="rating-button">
                                        <span className='rating-name'>Highly Recommended </span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* mobile veiw profile */}
                <Grid container justifyContent='center' className="mobile-view-profile">
                    <div>
                        <img src={MaleAvatar} style={{ width: "200px" }} alt="profilepic" />
                    </div>
                    <Grid container justifyContent='center'>
                        <Grid item xs={8} textAlign="center">
                            <div>
                                <p className='font-style-profile-span'>#IN00408</p>
                                <p className='font-style-profile-span' style={{ fontSize: "20px", color: "rgb(19, 63, 125)" }}>Amit Bansal</p>
                                <p className='font-style-profile-span'>Fullstack Developer</p>
                                <p style={{ "margin-top": "0px", "margin-bottom": "5px" }} className='font-style-profile-span'>Incruiter</p>
                                <p className='font-style-profile-span'>9988005577testing@email.com</p>
                                <p style={{ "margin-top": "0px", "margin-bottom": "5px" }} className='font-style-profile-span'>{`Exp`}:7</p>
                            </div>

                        </Grid>
                    </Grid >
                </Grid >
                <Grid container justifyContent='center' className='candidate-overall-skills'>
                    <Grid item xs={11} sm={11} md={6} lg={6} className='candidate-skills-wrapper'>
                        <div>
                            <span className='candidate-skills-heading'>Candidate vs. Global Skills</span>
                            <div className='candidate-skills'>
                                <Rad />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={11} md={6} lg={6} className='overAll-skills'>
                        <div className='overAll-skills-header'>
                            <span className='overAll-skills-span font-style-header'>Overall skills</span>
                        </div>
                        <div className='toplayer-ellip' style={{ paddingTop: "20px" }}>
                            <Grid container justifyContent='center' >
                                <Grid item xs={5} sm={3.5} md={3} style={{ textAlign: 'center' }}>
                                    <img className='toplayer-ellip-img' src={percent50} alt="ellipse" />
                                    <div className='toplayer-ellip-title font-style-percent' style={{ "margin": "0px", width: "100%" }}>Technical skills</div>
                                    <p className='toplayer-ellip-percent font-style-percent' style={{ "margin": "0px", justifyContent: 'center' }}>
                                        80%
                                    </p>
                                </Grid>
                            </Grid>
                            <div className='vector-wrapper'>
                                <div className='vector-tl-div'>
                                    <img className='vector-tl' src={vectortl} alt="vectortl"></img>
                                </div>
                                <div className='vector-tr-div'>
                                    <img className='vector-tl' src={vectortr} alt="vectortr"></img>
                                </div>
                            </div>
                        </div>
                        <Grid container justifyContent='center' className='secondlayer-ellip'>
                            <Grid item xs={11} sm={8} md={10} lg={9}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item xs={5} sm={5} md={4} lg={4} style={{ textAlign: 'center' }}>
                                        <img className='toplayer-ellip-img' src={percent30} alt="ellipse" />
                                        <div className='toplayer-ellip-title font-style-percent' style={{ "margin": "0px" }}>Job skills</div>
                                        <p className='toplayer-ellip-percent font-style-percent' style={{ "margin": "0px" }}>
                                            30%
                                        </p>
                                    </Grid>
                                    <Grid item xs={2} sm={2} md={2} lg={4} className='vector-center-div'>
                                        <img className='vector-center' src={vectorb} alt="vectorb"></img>
                                    </Grid>
                                    <Grid item xs={5} sm={5} md={4} lg={4} style={{ textAlign: 'center' }}>
                                        <img className='toplayer-ellip-img' src={percent60} alt="ellipse" />
                                        <p className='toplayer-ellip-title font-style-percent' style={{ "margin": "0px" }}>Soft skills</p>
                                        <p className='toplayer-ellip-percent font-style-percent' style={{ "margin": "0px" }}>
                                            60%
                                        </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent='space-between' marginTop={10}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className='soft-skills-wrapper'>
                            <div className='soft-skills-div'>
                                <span className='soft-skills-span'>Soft Skills</span>
                            </div>
                            <Grid container justifyContent='space-between' className='soft-skills-graph-wrapper' >
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
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
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
                    </Grid>
                </Grid>
            </div >
        </div >
    )
}
