
import SmallLogo from '../img/small-logo.PNG'
import '../style/homePage.css'

export const PatientAndDocNav = ({ handleShowL, handleShowS }) => {
    return (
        <div className="nav-home">
            <a href="/"><img src={SmallLogo} /></a>
            <div className="link-container">
                <a onClick={handleShowL} className="nav-link">LogIn</a>
                <a onClick={handleShowS} className="nav-link">SignUp</a>
            </div>
        </div>
    );
};