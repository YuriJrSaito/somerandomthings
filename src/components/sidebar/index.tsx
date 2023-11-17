'use client'
import "./sidebar.scss";
import CameraIcon from '@mui/icons-material/Camera';
import Menu from "./menu";
import Dropmenu from "./dropmenu";

const Sidebar = ({ sidebar }: { sidebar: boolean }) => {

  return (
    <>
      <div className={`sidebar ${sidebar == true ? "" : 'close'}`}>
        <div className="logo-details">
          <CameraIcon className="logo-icon" />
          <span className="logo-name">GESTORE</span>
        </div>

        <div className="nav">
          <ul className="nav-links">
            <Menu />
            <Menu />
            <Dropmenu sidebar={sidebar} />
            <Dropmenu sidebar={sidebar} />
            <Menu />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;