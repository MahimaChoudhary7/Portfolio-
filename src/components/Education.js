import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import './Education.css';

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-header">
                <p>My Experience<span> & </span>Education</p>
            </div>
            <hr></hr>
            <div className="education-list">
            <div className="education">
                <h3><FontAwesomeIcon icon={faBriefcase} />  My Experiences</h3>
                            <h4><span>2024 - </span> Software Development Intern</h4>
                            <p><span>Company</span> - Bluestock Fintech</p>
                            <p><span>-- Duration</span> - 1 July 2024 - 30 Aug 2024</p>
                            <p>
                                -- Worked as a Front-End developer for developing the IPO web application & REST APIs. Participated in various projects and
                                contributed to the development of fintech solutions. Gained hands-on experience in software engineering practices and
                                tools.
                            </p>
                        </div>
                <div className="education">
                        <h3></h3>
                            <h4><span>2023 - </span> Fundraiser</h4>
                            <p><span>Organization</span> - Odisha Development Management Programme(ODMP)</p>
                            <p><span>-- Duration</span> - 23 June 2023 - 29 July 2023</p>
                            <p>
                                -- Successfully raised funds to support organizational goals. Identified and engaged with potential donors to secure contributions.
                                Maintained comprehensive records of donor information and interactions.
                            </p>
                        </div>
                    <div className="education">
                        <h3><FontAwesomeIcon icon={faGraduationCap}/>  My Education</h3>
                            <h4><span>2024 - </span> Bachelor of Technology</h4>
                                <p><span>Institute</span> - Govind Ballabh Pant Institute of Engineering & Technology, Pauri Garhwal, Uttarakhand</p>
                                <p><span>Session</span> - 2020 - 2024</p>
                                <p><span>Aggregate</span> - 87.5%</p>
                                <p>
                                    -- Relevant coursework in problem-solving techniques, data structures & algorithms, operating systems,
                                    object-oriented programming & software engineering.
                                </p>
                            </div>
                            <div className="education">
                                <h3></h3>
                                <h4><span>2020 - </span> Intermediate (HSC)</h4>
                                <p><span>School</span>- Anand Swaroop Arya Saraswati Vidhya Mandir School, Roorkee, Uttarakhand</p>
                                <p><span>Session</span> - 2018 - 2020</p>
                                <p><span>Aggregate</span> - 90.8%</p>
                                <p>
                                    -- Got 90.8% of marks with PCM & Computer Science as main subjects.
                                </p>
                                </div>
                                <div className="education">
                                <h3></h3>
                                <h4><span>2020 - </span> High School (SSC)</h4>
                                <p><span>School</span> - Anand Swaroop Arya Saraswati Vidhya Mandir School, Roorkee, Uttarakhand</p>
                                <p><span>Session</span>- 2017 - 2018</p>
                                <p><span>Aggregate</span> - 88.6%</p>
                                <p>
                                    -- Got 88.6% of marks with Mathematics, Science, Social Science, English, Hindi & FIT as main subjects.
                                </p>
                                </div>

                    </div>
            </div>
    );
};

export default Education;