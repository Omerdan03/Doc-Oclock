import SmallLogo from '../img/small-logo.PNG'
import '../style/homePage.css'

export const NavHome = () => {
    return (
        <div className="nav-home">
            <a href="/"><img src={SmallLogo} /></a>
            <div className="link-container">
                <a href="/patientlogin" className="nav-link">Patient</a>
                <a href="/drlogin" className="nav-link">Doctor</a>
            </div>
        </div>
    );
};