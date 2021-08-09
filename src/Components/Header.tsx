import '../CSS/Header.css'
import { Link, animateScroll as scroll } from "react-scroll";
import Box from './Box'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
export default function Header() {
    return(
        <Box display={['grid']} className="headerContainer">
               <div className="logo">
                   <div className="myLogo">
                       <div id="E">E</div>
                       <div id="L">L</div>
                   </div>
               </div>
               <DesktopNav />
               <MobileNav />
        </Box>
    )
}