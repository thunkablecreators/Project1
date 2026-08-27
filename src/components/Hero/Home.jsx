
export default function Home () {
    const style = {
        "borderRadius": "12px",
        "border": "1px solid black",
        "padding": "15px",
        "backgroundColor": "#09edcf",
        "color":"#f56505",
        "fontFamily": "sanSerif"
    }
    return (
        <div>
            <h1 style={style}>Home | My Portfolio</h1>
            <div>
                <h2>Mark Maxwell Mathan</h2>
                <aside>Hey, I am a frontend MERN Stack Web Developer</aside>
                <img src="/images/Mark.jpg" alt="Mark Maxwell Mathan" />
                <a href="Projects.jsx">View Projects</a>
            </div>
        </div>
    )
}