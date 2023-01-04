import React from 'react'
import "./CircularGraph.css"
import percent0 from "../../images/percent0.svg"
import percent10 from "../../images/percent10.svg"
import percent20 from "../../images/percent20.svg"
import percent30 from "../../images/percent30.svg"
import percent40 from "../../images/percent40.svg"
import percent50 from "../../images/percent50.svg"
import percent60 from "../../images/percent60.svg"
import percent70 from "../../images/percent70.svg"
import percent80 from "../../images/percent80.svg"
import percent90 from "../../images/percent90.svg"
import percent100 from "../../images/percent100.svg"

export const CircularGraph = () => {
    return (
        <div className='circular-graph-wrapper'>
            <div className='circular-graph-header font-style-header-circular'>
                Mandatory Skills
            </div>
            <div className='mandatory-skills-graph-wrapper'>
                <div className='row1 d-flex'>
                    <div className='individual-graph-wrapper'>
                        <img className='graph-img' src={percent80} alt="80" />
                        <p className='graph-title' style={{ "margin": "0px" }}>Springboot</p>
                        <p style={{ "margin": "0px" }}>
                            <span className='graph-descp-percent' > 80% </span>
                            <span className='graph-descp-comment cg'> Excellent</span>
                        </p>
                    </div>
                    <div className='individual-graph-wrapper'>
                        <img className='graph-img' src={percent70} alt="70" />
                        <p className='graph-title ' style={{ "margin": "0px" }}>Springboot</p>
                        <p style={{ "margin": "0px" }}>
                            <span className='graph-descp-percent' > 70% </span>
                            <span className='graph-descp-comment cg'> Very Good</span>
                        </p>
                    </div>
                    <div className='individual-graph-wrapper'>
                        <img className='graph-img' src={percent60} alt="60" />
                        <p className='graph-title' style={{ "margin": "0px" }}>Springboot</p>
                        <p style={{ "margin": "0px" }}>
                            <span className='graph-descp-percent' > 60% </span>
                            <span className='graph-descp-comment cg'> Good</span>
                        </p>
                    </div>
                    <div className='individual-graph-wrapper last-pic'>
                        <img className='graph-img' src={percent50} alt="50" />
                        <p style={{ "margin": "0px" }} className='graph-title'>Springboot</p>
                        <p style={{ "margin": "0px" }}>
                            <span className='graph-descp-percent' > 50% </span>
                            <span className='graph-descp-comment cy'> Average</span>
                        </p>
                    </div>


                </div>
                <div className='row2 d-flex'>
                    <div className='individual-graph-wrapper'>
                        <img className=' row2-img' src={percent40} alt="40" />
                        <p style={{ "margin": "0px" }} className='graph-title'>Springboot</p>
                        <p style={{ "margin": "0px" }}>
                            <span className='graph-descp-percent' > 40% </span>
                            <span className='graph-descp-comment cr'> Poor</span>
                        </p>
                    </div>
                    <div className='individual-graph-wrapper'>
                        <img className='row2-img' src={percent30} alt="30" />
                        <p style={{ "margin": "0px" }} className='graph-title'>Springboot</p>
                        <p style={{ "margin": "0px" }}>
                            <span className='graph-descp-percent' > 30% </span>
                            <span className='graph-descp-comment cr'> Very Poor</span>
                        </p>
                    </div>
                    <div className='individual-graph-wrapper'>
                        <img className=' row2-img' src={percent60} alt="60" />
                        <p style={{ "margin": "0px" }} className='graph-title'>Springboot</p>
                        <p style={{ "margin": "0px" }}>
                            <span className='graph-descp-percent' > 60% </span>
                            <span className='graph-descp-comment cg'> Good</span>
                        </p>
                    </div>
                </div>
                <div className='row3 d-flex'>
                    <div className='individual-graph-wrapper '>
                        <img className='graph-img row3-img' src={percent50} alt="50" />
                        <p style={{ "margin": "0px" }} className='graph-title'>Springboot</p>
                        <p style={{ "margin": "0px" }}>
                            <span className='graph-descp-percent' > 50% </span>
                            <span className='graph-descp-comment cy'> Average</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='optional-skills-wrapper'>

                <div className='circular-graph-header optional-graph-header font-style-header-circular'>
                    Optional Skills
                </div>
                <div className='mandatory-skills-graph-wrapper'>
                    <div className='row1 d-flex'>
                        <div className='individual-graph-wrapper'>
                            <img className='graph-img ' src={percent80} alt="80" />
                            <p style={{ "margin": "0px" }} className='graph-title'>Springboot</p>
                            <p style={{ "margin": "0px" }}>
                                <span className='graph-descp-percent' > 80% </span>
                                <span className='graph-descp-comment cg'> Excellent</span>
                            </p>
                        </div>
                        <div className='individual-graph-wrapper'>
                            <img className='graph-img' src={percent70} alt="70" />
                            <p className='graph-title ' style={{ "margin": "0px" }}>Springboot</p>
                            <p style={{ "margin": "0px" }}>
                                <span className='graph-descp-percent' > 70% </span>
                                <span className='graph-descp-comment cg'> Very Good</span>
                            </p>
                        </div>
                        <div className='individual-graph-wrapper'>
                            <img className='graph-img' src={percent60} alt="60" />
                            <p className='graph-title' style={{ "margin": "0px" }}>Springboot</p>
                            <p style={{ "margin": "0px" }}>
                                <span className='graph-descp-percent' > 60% </span>
                                <span className='graph-descp-comment cg'> Good</span>
                            </p>
                        </div>
                        <div className='individual-graph-wrapper last-pic'>
                            <img className='graph-img row3-img' src={percent50} alt="50" />
                            <p className='graph-title' style={{ "margin": "0px" }}>Springboot</p>
                            <p style={{ "margin": "0px" }}>
                                <span className='graph-descp-percent' > 50% </span>
                                <span className='graph-descp-comment cy'> Average</span>
                            </p>
                        </div>

                    </div>
                    <div className='row2 d-flex'>
                        <div className='individual-graph-wrapper'>
                            <img className='row2-img' src={percent40} alt="40" />
                            <p className='graph-title' style={{ "margin": "0px" }}>Springboot</p>
                            <p style={{ "margin": "0px" }}>
                                <span className='graph-descp-percent' > 40% </span>
                                <span className='graph-descp-comment cr'> Poor</span>
                            </p>
                        </div>
                        <div className='individual-graph-wrapper'>
                            <img className='row2-img' src={percent30} alt="30" />
                            <p className='graph-title' style={{ "margin": "0px" }}>Springboot</p>
                            <p style={{ "margin": "0px" }}>
                                <span className='graph-descp-percent' > 30% </span>
                                <span className='graph-descp-comment cr'> Very Poor</span>
                            </p>
                        </div>
                        <div className='individual-graph-wrapper'>
                            <img className='row2-img' src={percent60} alt="60" />
                            <p className='graph-title' style={{ "margin": "0px" }}>Springboot</p>
                            <p style={{ "margin": "0px" }}>
                                <span className='graph-descp-percent' > 60% </span>
                                <span className='graph-descp-comment cg'> Good</span>
                            </p>
                        </div>
                    </div>
                    <div className='row3 d-flex'>
                        <div className='individual-graph-wrapper '>
                            <img className='graph-img row3-img' src={percent50} alt="50" />
                            <p style={{ "margin": "0px" }} className='graph-title'>Springboot</p>
                            <p style={{ "margin": "0px" }}>
                                <span className='graph-descp-percent' > 50% </span>
                                <span className='graph-descp-comment cy'> Average</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
