import '../CSS/Header.css'
import { Link, animateScroll as scroll } from "react-scroll";
import Box from './Box'
export default function DesktopNav() {
    return(
        <>
               
                    <div className="tech">
                            <Link 
                                activeClass="active"
                                to="tech" 
                                spy={true}
                                smooth={true}
                                offset={-172}
                                duration={500}
                            >
                                Tech
                            </Link>
                    </div>
                    <div className="projects">
                        <Link 
                                activeClass="active"
                                to="projects" 
                                spy={true}
                                smooth={true}
                                offset={-172}
                                duration={500}
                            >
                                Projects
                            </Link>
                    </div>
                    <div className="contact">
                        <Link 
                                activeClass="active"
                                to="contact" 
                                spy={true}
                                smooth={true}
                                offset={-172}
                                duration={500}
                            >
                                Contact
                            </Link>
                    </div>
                </>
    )
} 