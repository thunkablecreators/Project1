
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
                <img src="https://github.com/thunkablecreators/Project1/blob/main/src/components/Hero/Images/Mark.jpg" alt="Mark Maxwell Mathan" />
                <a href="Projects.jsx">View Projects</a>
                <div>
                    <h2>Contact Details</h2>
                    <button><a href="https://wa.me/256786477525">WhatsApp</a></button>
                    <button><a href="https://x.com/thunkablex">Twitter</a></button>
                    <button><a href="https://instagram.com/thunkablewebdevelopers">instagram</a></button>
                    <button><a href="https://thunkablex-creators.web.app">Official Website</a></button>
                </div>
            </div>
        </div>
    )
}