import React from 'react'

export default function HeroSection() {

    return (
        <>
        
            <div className="container">
                {/* Title Section */}
                <div className="text-center py-5">
                    <h2 className='fw-bold'>
                        Our tools help you in achieving your goals faster and easier!
                    </h2>
                    <p className="lead">Here's how it works</p>
                </div>
                {/* One Section */}
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-5">
                            <h1 className="display-1 fw-bold" style={{ color: "#69A2D9" }}>01</h1>
                            <h4 className="fw-bold">Select any of our tools</h4>
                            <p className='lead me-4' style={{ textAlign: "justify" }}>We provide AI tools for teachers as well as students. The teacher toolkit helps educators to generate lesson plans, assessments, rubric as well as fun activities. We also have AI tools for students which can help them with their homework, and provide assistance when required.
                            </p>
                        </div>
                        <div className="col-md-7 border border-primary border-one rounded p-2">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/aVMdy0GQNfA"
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
                                    src="https://www.youtube.com/embed/sUWQgXyL4Zk"
                                    title="YouTube video"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="col-md-5" style={{ textAlign: "right" }}>
                            <h1 className="display-1 fw-bold" style={{ color: "#B2FBA5" }}>02</h1>
                            <h4 className="fw-bold">Choose your preferences</h4>
                            <p className='lead ms-4' style={{ textAlign: "justify" }}>We understand that without the right prompt, using AI can actually take up more time. So, we save you from the hassle, all you need to do is choose from the variety of the options we provide! Simple and Easy!
                            </p>
                        </div>
                    </div>
                </div>
                {/* Third Section */}
                <div className="container mb-5">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <h1 className="display-1 fw-bold" style={{ color: "#FED28F" }}>03</h1>
                            <h4 className="fw-bold">Click Generate</h4>
                            <p className='lead me-4' style={{ textAlign: "justify" }}>Now, with just a click, you will get the best results through our AI-driven tools. Not just that! We also let you take charge and equip you with the feature of editing the results as per your liking.</p>
                        </div>
                        <div className="col-md-7 border border-warning rounded p-2">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.youtube.com/embed/zNYOnw1QYAE"
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
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOneLeft"
                                        aria-expanded="false"
                                        aria-controls="collapseOneLeft"
                                    >
                                        What is an AI tool for teaching?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOneLeft"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOneLeft"
                                    data-bs-parent="#faqAccordionLeft"
                                >
                                    <div className="accordion-body">
                                        An AI tool for teaching is a software application that uses artificial intelligence to enhance the educational experience for both educators and students. These tools can personalize learning, automate assessments, and assist in content creation, making the teaching process more efficient and effective. Popular examples include adaptive learning platforms like DreamBox and AI-driven content generation tools like ChatGPT.
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
                                        How is AI being used in teaching?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwoLeft"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwoLeft"
                                    data-bs-parent="#faqAccordionLeft"
                                >
                                    <div className="accordion-body">
                                        AI is being used in teaching to personalize learning experiences, automate grading, and enhance classroom management. It helps educators tailor lessons to individual student needs, provides real-time feedback, and streamlines administrative tasks.
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
                                        What are the main features of your AI toolkit?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThreeLeft"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThreeLeft"
                                    data-bs-parent="#faqAccordionLeft"
                                >
                                    <div className="accordion-body">
                                        Our AI toolkit includes lesson plan generator, rubric generator, quiz generator, worksheet generator, workbook generator, designed to enhance teaching efficiency and improve student outcomes.
                                    </div>
                                </div>
                            </div>
                            {/* Fourth FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingFourLeft">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFourLeft"
                                        aria-expanded="false"
                                        aria-controls="collapseFourLeft"
                                    >
                                        Can teachers customize the tools for their specific classrooms?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFourLeft"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFourLeft"
                                    data-bs-parent="#faqAccordionLeft"
                                >
                                    <div className="accordion-body">
                                        Yes, our tools allow for extensive customization to align with individual classroom needs and teaching styles.
                                    </div>
                                </div>
                            </div>
                            {/* Fifth FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingFifthLeft">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFifthLeft"
                                        aria-expanded="false"
                                        aria-controls="collapseFifthLeft"
                                    >
                                        Where can I find tutorials for using your tools?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFifthLeft"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFifthLeft"
                                    data-bs-parent="#faqAccordionLeft"
                                >
                                    <div className="accordion-body">
                                        Tutorials are available on our website, providing step-by-step instructions for maximizing the effectiveness of our tools.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Column - col-md-6 */}
                    <div className="col-md-6">
                        <div className="accordion" id="faqAccordionRight">
                            {/* First FAQ */}
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
                                        How can AI tools improve classroom productivity?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOneRight"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOneRight"
                                    data-bs-parent="#faqAccordionRight"
                                >
                                    <div className="accordion-body">
                                        AI tools can automate administrative tasks, generate teaching materials, and provide real-time feedback, allowing educators to focus more on teaching and less on paperwork.
                                    </div>
                                </div>
                            </div>

                            {/* Second FAQ */}
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
                                        What types of AI tools are available for teachers?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwoRight"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwoRight"
                                    data-bs-parent="#faqAccordionRight"
                                >
                                    <div className="accordion-body">
                                        Common types include quiz generators, lesson planners, vocabulary builders, and content summarizers, among others.
                                    </div>
                                </div>
                            </div>

                            {/* Third FAQ */}
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
                                        What are the latest trends in AI for education?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThreeRight"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThreeRight"
                                    data-bs-parent="#faqAccordionRight"
                                >
                                    <div className="accordion-body">
                                        Current trends include adaptive learning, AI-driven analytics, and the integration of gamification to enhance student engagement.
                                    </div>
                                </div>
                            </div>
                            {/* Fourth FAQ */}
                            <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingFourRight">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFourRight"
                                        aria-expanded="false"
                                        aria-controls="collapseFourRight"
                                    >
                                        Are your tools available in multiple languages?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFourRight"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFourRight"
                                    data-bs-parent="#faqAccordionRight"
                                >
                                    <div className="accordion-body">
                                        Currently, we do have options to generate the output in Spanish and Thai. We are working on providing multilingual support to ensure accessibility for diverse educational environments.
                                    </div>
                                </div>
                            </div>
                             {/* Fifth FAQ */}
                             <div className="accordion-item mb-3">
                                <h2 className="accordion-header" id="headingFifthRight">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseFifthRight"
                                        aria-expanded="false"
                                        aria-controls="collapseFifthRight"
                                    >
                                        Are your tools available in multiple languages?
                                    </button>
                                </h2>
                                <div
                                    id="collapseFifthRight"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingFifthRight"
                                    data-bs-parent="#faqAccordionRight"
                                >
                                    <div className="accordion-body">
                                        Currently, we do have options to generate the output in Spanish and Thai. We are working on providing multilingual support to ensure accessibility for diverse educational environments.
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
