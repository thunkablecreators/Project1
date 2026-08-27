export default function SkillCard () {
    const img = {
        "React": "https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg",
        "Js": "https://github.com/voodootikigod/logo.js/blob/1544bdeed/js.svg",
        "HTML":"https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa15hmqspl35613gmu0nd.jpeg"
    }
    return (
        <di>
            <p>I am confident in using:
                <p><img src={img.React}/>React</p>
                <p><img src={img.Js}/> JavaScript</p>
                <p><img src={img.HTML}/>HTML</p>
                <p><img src={img.CSS}/>CSS</p>
            </p>
        </di>
    )
}