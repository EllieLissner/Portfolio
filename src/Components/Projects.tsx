import '../CSS/Projects.css'
import picsavimg from '../images/pictursaver.png'
import falimg from '../images/falendar.png'
import motivimg from '../images/motivatepuppy.png'
import chaseimg from '../images/bunnychase.png'
import chasegif from '../images/chase.gif'
import puppygif from '../images/puppyposter.gif'
import picgif from '../images/picturesaver.gif'
import calendargif from '../images/calendar.gif'


export default function  Projects() {
    return(
        <div className="projectsContainer">
            <a id="projects">Projects</a>
            <div className="pictureSaver flip-container" 
                // onTouchStart="this.classList.toggle('hover)"
            >
                <div className="flipper">
                    <div className="front">
                        <img className="picimg" src={picgif}></img>
                    </div>
                    <div className="back">
                        <h4>
                            Picture Saver
                        </h4>
                        <h5>
                            Typescript, React, Postgres, Sequelize, Node, AWS S3 
                        </h5>
                        <p>
                            Full stack web app that utilizes Typscript React.js for 
                            the front end, that allows the user to upload files to Amazon's 
                            Simple Storage Server, while simultaneously saving some of that 
                            data to an individual database within Postgres for later retrieval.
                        </p>
                        <a href="https://github.com/EllieLissner/Picture-Saver" target="_blank">GitHub</a><br/>
                        <a href="https://610deac2185b20619091c2d9--quirky-pare-dad37a.netlify.app/" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
            <div className="falendar flip-container" 
                // onTouchStart="this.classList.toggle('hover)"
            >
                <div className="flipper">
                    <div className="front">
                        <img className="falimg" src={calendargif}></img>
                    </div>
                    <div className="back">
                        <h4>
                            Falendar
                        </h4>
                        <h5>
                            MongoDb, Mongoose, Express, React, Node 
                        </h5>
                        <p>
                            Auth locked full stack web app created with team of developers. Created with
                            React font end with functioning calendar and event creation. Back end created 
                            with MongoDb and Mongoose to save calendar entries to an online database.
                        </p>
                        <a href="https://github.com/EllieLissner/Falendar-Client" target="_blank">GitHub</a><br/>
                        <a href="https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
            <div className="motivationalPuppy flip-container" 
                // onTouchStart="this.classList.toggle('hover)"
            >
                <div className="flipper">
                    <div className="front">
                        <img className="motimg" src={puppygif}></img>
                    </div>
                    <div className="back">
                        <h4>
                            Motivational Puppy
                        </h4>
                        <h5>
                            Node, Postgres, Sequelize, RESTful routing
                        </h5>
                        <p>
                        Full stack web app to make motivational posters using random pictures
                         and quotes provided by public APIs. Utilized RESTful routing with 
                         Express.js through the backend and then utilized Postgres, and Sequelize
                          for database management to save and edit posters. 

                        </p>
                        <a href="https://github.com/EllieLissner/Project2-Motivational-Puppy" target="_blank">GitHub</a><br/>
                        <a href="https://motivational-puppy.herokuapp.com/" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
            <div className="bunnyChase flip-container" 
                // onTouchStart="this.classList.toggle('hover)"
            >
                <div className="flipper">
                    <div className="front">
                        <img className="chaseimg" src={chasegif}></img>
                    </div>
                    <div className="back">
                        <h4>
                            Chase the Bunny
                        </h4>
                        <h5>
                            Javascript, HTML, CSS
                        </h5>
                        <p>
                            Created fully functional game with Javascript and HTML with CSS styling. User 
                            can control the dog with 'w' and 's' keys to navigate around obstacles to keep
                            the bunny within view. Utilized collision logic so if the player runs into an obstacle, the bunny will run 
                            off the screen. Player accumulates points based on length of time the player 
                            can keep then bunny onscreen.
                        </p>
                        <a href="https://github.com/EllieLissner/Project1-ChaseTheBunny" target="_blank">GitHub</a> <br/>
                        <a href="https://ellielissner.github.io/Project1-ChaseTheBunny/" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}