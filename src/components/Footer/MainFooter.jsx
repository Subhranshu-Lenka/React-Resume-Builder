import React from 'react'

function MainFooter() {
    return (
        <>
            <section
                className='min-h-[20vh] h-[24vh] p-[2%]'
            >
                <div className="quick-links-section">
                    <nav className="grid grid-cols-3 place-items-center ">
                        <div className="links">
                            <h4>ResumeForge</h4>
                            <ul>
                                <li>Building careers, one resume at a time.</li>
                            </ul>
                        </div>
                        <div className="links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>Templates</li>
                                <li>Resume Builder</li>
                                <li>Cover Letter</li>
                                <li>Career Tips</li>
                            </ul>
                        </div>
                        <div className="links">
                            <h4>Support</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                    </nav>
                </div>
                <p className="copyright">© 2025 ResumeForge. All rights reserved.</p>
            </section>
        </>
    )
}

export default MainFooter;