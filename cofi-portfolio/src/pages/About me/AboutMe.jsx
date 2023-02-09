import { Link } from "react-router-dom"

import '../Home/Home.css'

export default function AboutMe() {
    return (
        <>
            <h1>YO soy COFI, rindanse ante mi poder</h1>
            <Link to={'/'}><div className="prueba">Home page</div></Link>
        </>
    )
}