import react from "../assets/react.png"
import javascript from "../assets/javascript.png"
import css from "../assets/css.png"
export default function SkillCard () {
    const imgStyle = {
        "borderRadius": "12px",
        "padding": "5px",
        "width": "50px",
        "maxWidth": "100px",
        "minWidth": "20px"
    }
    return (
        <div>
            <p>I am confident in using:</p>
                <p><img style={imgStyle} src={react}/>React</p>
                <p><img style={imgStyle} src={javascript}/> JavaScript</p>
                <p><img style={imgStyle} src= {css}/>CSS</p>
        </div>
    )
}