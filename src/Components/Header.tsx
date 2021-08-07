import '../CSS/Header.css'
import { Link, animateScroll as scroll } from "react-scroll";
export default function Header() {
    return(
        <div className="headerContainer">
               <div className="logo">
                   <div className="myLogo">
                       <div id="E">E</div>
                       <div id="L">L</div>
                   </div>
               </div>
                
                    <div className="tech">
                            <Link 
                                activeClass="active"
                                to="tech" 
                                spy={true}
                                smooth={true}
                                offset={-182}
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
                                offset={-150}
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
                                offset={-150}
                                duration={500}
                            >
                                Contact
                            </Link>
                    </div>
            
        </div>
    )
}