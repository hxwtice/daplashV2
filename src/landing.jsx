import Logo from "/logocolorless.png"
import './landing.css'
export function Landing(){
    return(
        <>
        <div className="landing">
            <img src={Logo} className="logo"/>
            <div className="logo-name">daplash.</div>
            <div className="tagline">The <span className="green">Answer</span> for <span className="red">Branding.</span></div>
            <div className="motto">We write stories for small businesses, startups and Individuals. We help them <span className="green">thrive.</span></div>
        </div>
        </>
    )
}