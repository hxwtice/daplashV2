import "./founders.css"
import founder1 from "/founder1.png"
import founder2 from "/founder2.png"
import founder3 from "/founder3.png"
import founder4 from "/founder4.png"

export function Founders()
{
    return(
        <>
        <div className="founder-title">Meet the founders</div>
        <div className="ourfounders">
            
            <div className="founder">
                <div><img src={founder1} className="founder-pic"/></div>
                <div className="founder-bio"><div className="founder-content">A skillful UI/UX designer from Guwahati who builds websites and apps which speaks his proficiency. A guy who's always had an eye for design and graphics.</div>
                <div className="founder-name">Dayamay Udaygiri</div>
                <div className="founder-job">UX and Graphic Design</div>
          </div>
            </div>
            <div className="founder">
                <div><img src={founder2} className="founder-pic"/></div>
                <div className="founder-bio">
                    <div className="founder-content">A curious fellow from Delhi, a digital marketer. A guy who's been working with all the digital marketing terms, advertising, content marketing, and sales.</div>
                    <div className="founder-name">Labeeb Iqbal</div>
                    <div className="founder-job">Digital Marketing</div>
                </div>
            </div>
            <div className="founder">
                <div><img src={founder3} className="founder-pic"/></div>
                <div className="founder-bio">
                <div className="founder-content">A camera enthusiast from Hyderabad who acquires the art of filmmaking. An editor who's specialized in making videos and creating content out of them.</div>
                <div className="founder-name">Mohammad Habeeb</div>
                <div className="founder-job">Content Strategist</div>
                </div>
            </div>
            <div className="founder">
                <div><img src={founder4} className="founder-pic"/></div>
                <div className="founder-bio">
                <div className="founder-content">A lit content writer from Kerala who's always down to write something new. An absolute expert at creating engaging content and driving traffic to our client's social media or website.</div>
                <div className="founder-name">Jasim Jabir</div>
                <div className="founder-job">Content Writer</div>
                </div>
            </div>
        </div>
        </>
    )
}