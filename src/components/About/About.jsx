import SkillCard from "../Skills/SkillCard"
export default function About () {
    const liststyle = {
        "display":"flex",
        "justifyContent":"row"
    }
    return (
        <div>
            <h2>About | Mark Maxwell Mathan</h2>
            <div>
                <p>I am a Ugandam MERN Stack web developer</p>
                <SkillCard />
                <div>
                    <h3>Interests | Mark Maxwell</h3>
                    <p><img src="https://codingbytes.com/https://media.licdn.com/dms/image/v2/D4D12AQHe5RBOds0-iQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702136235215?e=2147483647&v=beta&t=8JeW9kg944D9SbIdmd0OhhHGjVfdHr7WWyuJzJPvE2ware-web-development-and-full-stack-same/"/>Full Stack Web Dev</p> |
                    <p><img src="" alt=""/>Autonomous Robotics</p>
                </div>
            </div>
        </div>
    )
}