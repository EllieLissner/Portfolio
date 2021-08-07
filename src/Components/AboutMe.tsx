import '../CSS/AboutMe.css'
import treeimg from '../images/FB_IMG_1512121327627.jpg'

export default function AboutMe() {
    return(
        <div className="container">
            <img className="treeimg" src={treeimg}></img>
            
            <div className="title">
                Hi! I'm <span className="name">Elizabeth Lissner</span> <br/ >
                a <span className="job">Full Stack Software Engineer</span>
            </div>
            <div className="personality">
                I am a team-oriented software developer with a Doctorate of Pharmacy 
                and an eagerness to learn new skills and technologies.
            </div>
            <div className="seeking">
            I love problem solving, and I often think on and discuss
            interesting roadblocks even when not actively coding. I am 
            thrilled to bring my enthusiasm for teamwork and learning to a
            position where I can continue to grow.
            </div>
        </div>
    )
}