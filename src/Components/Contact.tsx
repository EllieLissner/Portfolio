import '../CSS/Contact.css'
import { FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from 'react-icons/fa'
import { FaFilePdf } from "react-icons/fa"
import Box from './Box'

export default function Contact() {

    return(
        <Box className="contactContainer">
            <h3 id="contact">Contact Me!</h3>
            <Box className="contactLink">
                <div><MdEmail/>eswalker0723@gmail.com </div>
                <div>
                    <a className="dirContactLink" href="https://www.linkedin.com/in/elizabeth-lissner-se/" target="_blank"><FaLinkedin/>My LinkedIn Page </a>
                </div> 
            </Box>
            <Box className="info">
                <a className="dirContactLink" href="https://github.com/EllieLissner" target="_blank"><FaGithub/>My Github Page</a><br/>
                <a className="dirContactLink" href="https://drive.google.com/file/d/1-_o5GujKRNbr0B9nG0YWoWX1J6MwjC9D/view?usp=sharing" target="_blank"> <FaFilePdf/> Resume</a>
            </Box>
           
        </Box>
    )
}