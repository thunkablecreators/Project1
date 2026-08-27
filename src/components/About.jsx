import SkillCard from "./SkillCard"
import fullstack from "../assets/Fullstack.jpg"
import autonomous from "../assets/autonomous.jpg"
export default function About () {
    const imgStyle = {
        "borderRadius": "500%",
        "padding": "5px",
        "width": "600px",
        "maxWidth": "100px",
        "minWidth": "20px"
    }
    return (
        <div>
            <h2>About | Mark Maxwell Mathan</h2>
            <div>
                <p>I am a Ugandam MERN Stack web developer</p>
                <SkillCard />
                <div>
                    <h3>Interests | Mark Maxwell</h3>
                    <p><img style={imgStyle} src={fullstack}/>FullStack Web Development using MERN Stack</p>
                    <p><img src={autonomous} style={imgStyle}/>Autonomous Robotics</p>
                </div>
            </div>
        </div>
    )
}