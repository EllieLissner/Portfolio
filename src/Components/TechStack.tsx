import '../CSS/TechStack.css'
import  htmlimg from '../images/5847f5bdcef1014c0b5e489c.png'
import cssimg from '../images/html5-logo-31821.png'
import javascriptimg from '../images/imgbin_javascript-computer-icons-software-developer-cascading-style-sheets-png.png'
import bootstrapimg from '../images/imgbin_bootstrap-logo-computer-software-web-application-portable-document-format-png.png'
import nodeimg from '../images/clipart1955753.png'
import sequelizeimg from '../images/sequelize.png'
import postgresimg from '../images/kisspng-postgresql-logo-computer-software-database-open-source-vector-images-5aaa26e1ef9611.3514090315211005139814.png'
import reactimg from '../images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png'
import mongoimg from '../images/pngkit_ifunny-watermark-png_2254691.png'
import mongooseimg from '../images/ClipartKey_1379124.png'
import pythonimg from '../images/PinClipart.com_python-clipart_5391503.png'
import typescriptimg from '../images/ts-logo-512.png'

export default function TechStack() {
    return (
        <div className="techContainer">
            <a id="tech">Tech Stack</a>
            <div className="html">
                <img className="htmlimg" src={htmlimg}></img>
            </div>
            <div className="css">
                <img className="cssimg" src={cssimg}></img>
            </div>
            <div className="javascript">
                <img className="jsimg" src={javascriptimg}></img>
            </div>
            <div className="bootstrap">
                <img className="bsimg" src={bootstrapimg}></img>
            </div>
            <div className="node">
                <img className="nimg" src={nodeimg}></img>
            </div>
            <div className="sequelize">
                <img className="techimg" src={sequelizeimg}></img>
            </div>
            <div className="postgres">
                <img className="techimg" src={postgresimg}></img>
            </div>
            <div className="react">
                <img className="techimg" src={reactimg}></img>
            </div>
            <div className="mongo">
                <img className="mgimg" src={mongoimg}></img>
            </div>
            <div className="mongoose">
                <img className="mgsimg" src={mongooseimg}></img>
            </div>
            <div className="python">
                <img className="pythimg" src={pythonimg}></img>
            </div>
            <div className="typescript">
                <img className="tsimg" src={typescriptimg}></img>
            </div>
        </div>
    )
}