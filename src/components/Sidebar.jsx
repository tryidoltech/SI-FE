import React, { useState } from "react";
import "../styles/Sidebar.css";
import {
  FaHome,
  FaCalendar,
  FaTags,
  FaCheckSquare,
  FaPhone,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAppointmentsOpen, setIsAppointmentsOpen] = useState(false);

  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleAppointmentsMenu = () => {
    setIsAppointmentsOpen(!isAppointmentsOpen);
  };

  // Open appointments sub-menu when "/allappointments" is active
  React.useEffect(() => {
    if (location.pathname === "/allappointments") {
      setIsAppointmentsOpen(true);
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <div className="sidebar-menu-section">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
          >
            <MenuItem icon={<FaHome />} label="Dashboard" />
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
          >
            <MenuItem icon={<FaCalendar />} label="Calendar" />
          </NavLink>

          <NavLink
            to="/allappointments"
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            onClick={() => setIsAppointmentsOpen(!isAppointmentsOpen)}
          >
            <MenuItem
              icon={<FaCalendar />}
              label={
                <>
                   Appointments{" "}
                  {isAppointmentsOpen ? <FaAngleDown /> : <FaAngleRight />}
                </>
              }
            />
          </NavLink>

          {isAppointmentsOpen && (
            <>
              <NavLink
                to="/pendingappointment"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<FaTags />} label="Pending Appointments" />
              </NavLink>
              <NavLink
                to="/ConfirmedAppointments"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<FaCalendar />} label="Confirmed Appointments" />
              </NavLink>
              <NavLink
                to="/CheckInAppointments"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<FaCheckSquare />} label="Checked-In Appointments" />
              </NavLink>
              <NavLink
                to="/PaidAppointments"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<FaPhone />} label="Paid Appointments" />
              </NavLink>
              <NavLink
                to="/clientinfo"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<FaCalendar />} label="Client Info" />
              </NavLink>
            </>
          )}
        </div>
        <div className="sidebar-menu-section">
          <MenuItem icon={<FaCog />} label="Settings" />
          <MenuItem icon={<FaSignOutAlt />} label="Logout" />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label }) => (
  <div className="sidebar-menu-item ">
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
