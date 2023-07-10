import "./card.css"
import uncle from "/uncle.png"
export function Card()
{
    return(
        <>
        <div className="card">
            <div className="card-1">
            <div className="quote">
            "The only thing that is impossible is the thing you don't try"
            </div>
            <div className="writer">George Bernard Shaw</div>
            <div className="writer-1">playwright, critic</div>
            <div className="btn"><button className="btn-1">What do we do?</button></div>
            </div>
            <div className="image"><img src={uncle} className="image-1"/></div>
        </div>
        </>
    )
}