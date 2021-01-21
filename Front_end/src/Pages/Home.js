import { NavHome } from "../Components/NavHome";
import BigLogo from '../img/big-logo.PNG'
import Doctor from '../img/doctor-home-page.PNG'

export const Home = () => {
  return (
    <div className="home">
      <NavHome />
      <div className="title-container">
        <img src={BigLogo} />
        <div className="title-text">
          <div className="text-container">
            <div className="blue-text">Doc</div>
            <div className="red-text">O'Clock</div>
          </div>
          <div className="sub-title">Schedule Optimization</div>
        </div>
      </div>
      <div className="container-info">
        <img src={Doctor} />
        <div className="app-info-text">
          DocO'clock is an application that aims to optimize the medical appointment scheduling process with artificial intelligence. With our solution, patients don't need to wait for hours in line, and doctors can optimize their schedules, reducing time loss, thus being able to assist more patients.
      </div>

      </div>
    </div>
  );
};
