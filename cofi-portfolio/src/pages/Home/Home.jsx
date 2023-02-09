import { Link } from "react-router-dom"

import './Home.css'

export default function Home() {
    return (
        <>
            <h1>helping companies to design impactful products</h1>
            <Link to={'/about-me'}><div className="prueba">Who am I?</div></Link>         
        </>
    )
}