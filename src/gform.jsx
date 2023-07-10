import './gform.css'

export function Form(){
    return(
        <>
        <div className="form">
            <div className="greet">Get in touch with us :</div>
            <div className="gform">
                <div className="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScS6Kpk9lmp7CrpuUa5VBpW0rNE5NQRxNMAtbaWykFl8k0cAg/viewform" target='_blank' className="button-2"><button className="button-1">Schedule a Call</button></a></div>
                <div className="min">Takes less than one minute.</div>
            </div>
        </div>
        </>
    )
}