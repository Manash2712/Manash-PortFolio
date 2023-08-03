import "./index.scss"
import LogoTitle from "../../assets/images/firstLetter.png"
import AnimatedLetters from "../AnimatedLetters"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Logo from "./Logo"

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'n', 'a', 's', 'h']
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArr={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArr={jobArray} idx={22} />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT-ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home;