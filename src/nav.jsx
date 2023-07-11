import './nav.css'

export function Nav() {
    return (
        <>
            <div className="navbar">
                <div className='nav-offerings' onClick={() => {
                    const anchor = document.querySelector('#offerings')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                    Offerings
                </div>
                <div className='nav-about' onClick={() => {
                    const anchor = document.querySelector('#aboutus')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>
                    About us
                </div>
            </div>
        </>
    )
}