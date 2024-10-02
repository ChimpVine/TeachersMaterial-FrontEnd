import React from 'react'
import heroSection from '../assests/img/Hero-Section.png'

export default function HeroSection() {

    return (
        <>
            <div className="container mt-5 py-5 mb-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2>
                            Introducing <span className="text-style"><strong>AI for Education</strong></span>
                        </h2>
                        <h3 className="fw-bold">Empower Your Classroom.</h3>
                        <p className='lead'>AI-driven tools that give you back time to focus on what matters most your students.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={heroSection} alt="ChimpVine-hero-Section" className='img-fluid' />
                    </div>
                </div>
            </div>
            <div className="container">
                {/* Title Section */}
                <div className="text-center py-5">
                    <h2 className='fw-bold'>Now we support every part of your lesson.</h2>
                    <p className="lead">Here's how it works</p>
                </div>
                {/* One Section */}
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className="display-1 fw-bold" style={{ color: "#69A2D9" }}>01</h1>
                            <h4 className="fw-bold">SELECT A TOOL.</h4>
                            <p className='lead me-4' style={{textAlign:"justify"}}>Choose from tools like lesson planners, assessments, or gamification to enhance classroom engagement. Simplify your teaching process with ChimpVine.
                            </p>
                        </div>
                        <div className="col-md-7 border border-primary border-one rounded p-2">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/lvXn7xsVN5w"
                                    title="YouTube video"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Section */}
                <div className="container mb-5">
                    <div className="row align-items-center">
                        <div className="col-md-7 border border-success rounded p-2">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/NwVyGmiaKGE"
                                    title="YouTube video"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="col-md-5" style={{ textAlign: "right" }}>
                            <h1 className="display-1 fw-bold" style={{ color: "#B2FBA5" }}>02</h1>
                            <h4 className="fw-bold">ENTER YOUR PROMPT.</h4>
                            <p className='lead ms-4' style={{textAlign:"justify"}}>Input your classroom needs into our AI powered tools whether it’s a planner, assessment, or interactive game and let ChimpVine handle the rest.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Third Section */}
                <div className="container mb-5">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <h1 className="display-1 fw-bold" style={{ color: "#FED28F" }}>03</h1>
                            <h4 className="fw-bold">CLICK GENERATE.</h4>
                            <p className='lead me-4' style={{textAlign:"justify"}}>Instantly create customized lesson plans, worksheets, and assessments to engage students and streamline classroom management.</p>
                        </div>
                        <div className="col-md-7 border border-warning rounded p-2">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/9YRZBQENfkE"
                                    title="YouTube video"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5 mb-5">
                <h2 className="fw-bold mb-5 text-center">Frequently Asked Questions (FAQ's)</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="accordion" id="faqAccordionLeft">
                            {/* First FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingOneLeft">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOneLeft"
                                        aria-expanded="false"
                                        aria-controls="collapseOneLeft"
                                    >
                                        What tools are included in the Ultimate Teaching Toolkit?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOneLeft"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOneLeft"
                                    data-bs-parent="#faqAccordionLeft"
                                >
                                    <div className="accordion-body">
                                        Our toolkit offers AI-driven lesson generators, interactive quizzes, gamified learning experiences, and customizable teaching resources, all designed to make your lessons more engaging and effective.
                                    </div>
                                </div>
                            </div>

                            {/* Second FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingTwoLeft">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwoLeft"
                                        aria-expanded="false"
                                        aria-controls="collapseTwoLeft"
                                    >
                                        How does the AI tailor lessons to my classroom needs?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwoLeft"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwoLeft"
                                    data-bs-parent="#faqAccordionLeft"
                                >
                                    <div className="accordion-body">
                                        The AI uses your inputs and prompts to create lessons that align with your students' grade level, subject matter, and learning objectives, ensuring personalized and relevant content.
                                    </div>
                                </div>
                            </div>

                            {/* Third FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingThreeLeft">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThreeLeft"
                                        aria-expanded="false"
                                        aria-controls="collapseThreeLeft"
                                    >
                                        Is the toolkit suitable for all subjects and grade levels?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThreeLeft"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThreeLeft"
                                    data-bs-parent="#faqAccordionLeft"
                                >
                                    <div className="accordion-body">
                                        Yes, the toolkit is designed to work across a wide range of subjects and grade levels, from elementary school to high school, covering subjects like math, science, language arts, and more.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Column - col-md-6 */}
                    <div className="col-md-6">
                        <div className="accordion" id="faqAccordionRight">
                            {/* Fourth FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingOneRight">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOneRight"
                                        aria-expanded="false"
                                        aria-controls="collapseOneRight"
                                    >
                                        Can I modify the lessons generated by the AI?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOneRight"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOneRight"
                                    data-bs-parent="#faqAccordionRight"
                                >
                                    <div className="accordion-body">
                                        Absolutely! The AI generates lessons as a starting point, but you can easily modify, enhance, or adapt the content to fit your unique teaching style and your students’ needs.
                                    </div>
                                </div>
                            </div>

                            {/* Fifth FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingTwoRight">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwoRight"
                                        aria-expanded="false"
                                        aria-controls="collapseTwoRight"
                                    >
                                        Do I need any special technical skills to use the toolkit?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwoRight"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwoRight"
                                    data-bs-parent="#faqAccordionRight"
                                >
                                    <div className="accordion-body">
                                        Not at all! Our platform is designed to be user-friendly and intuitive, making it easy for any teacher to get started, even with limited tech experience.
                                    </div>
                                </div>
                            </div>

                            {/* Sixth FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingThreeRight">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThreeRight"
                                        aria-expanded="false"
                                        aria-controls="collapseThreeRight"
                                    >
                                        How does the toolkit support gamification in the classroom?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThreeRight"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThreeRight"
                                    data-bs-parent="#faqAccordionRight"
                                >
                                    <div className="accordion-body">
                                        The toolkit incorporates gamified elements like interactive quizzes, learning challenges, and reward-based learning modules to make lessons more engaging and fun for students.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
