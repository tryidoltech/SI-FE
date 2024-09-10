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
  FaBoxOpen,
} from "react-icons/fa";
import {  } from "react-icons"
import { NavLink, useLocation } from "react-router-dom";
// import admin_logo from "../assets/admin_logo.png";
import dashboard from "../assets/dashboard.png";
import { BiHomeAlt2, BiUserCheck } from "react-icons/bi";
import { CgCalendarDates, CgUserList } from "react-icons/cg";
import { LiaUserCheckSolid, LiaUserClockSolid } from "react-icons/lia";
import { TbTransactionRupee } from "react-icons/tb";
import { PiHairDryer, PiUser, PiUsersThree } from "react-icons/pi";
import { MdOutlineInventory } from "react-icons/md";


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
            <MenuItem icon={<BiHomeAlt2></BiHomeAlt2>} label="Dashboard" />

          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
          >
            <MenuItem icon={<CgCalendarDates></CgCalendarDates>} label="Calendar" />
          </NavLink>

          <NavLink
            to="/allappointments"
            className={ ({ isActive }) =>
              isActive ? "navlink active" : "navlink"
            }
            onClick={() => setIsAppointmentsOpen(!isAppointmentsOpen)}
          >
            <MenuItem className=""
              icon={<CgUserList></CgUserList>}
              label={
                <div className="flex gap-24 items-center">
                   Appointments{" "}
                  {isAppointmentsOpen ? <FaAngleDown /> : <FaAngleRight />}
                </div>

              }
            />
          </NavLink>

          {isAppointmentsOpen && (
            <div className="bg-[hsl(0,0%,98%)] ">
              <NavLink
                to="/pendingappointment"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<LiaUserClockSolid></LiaUserClockSolid>} label="Pending Appointments" />
              </NavLink>
              <NavLink
                to="/ConfirmedAppointments"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<LiaUserCheckSolid></LiaUserCheckSolid>} label="Confirmed Appointments" />
              </NavLink>
              <NavLink
                to="/CheckInAppointments"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem className="" icon={<BiUserCheck></BiUserCheck>} label="Checked-In Appointments" />
              </NavLink>
              <NavLink
                to="/PaidAppointments"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<TbTransactionRupee></TbTransactionRupee>} label="Paid Appointments" />
              </NavLink>
              <NavLink
                to="/Reschedule Appointment"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<TbTransactionRupee></TbTransactionRupee>} label="Reschedule Appointment" />
              </NavLink>

            </div>
          )}
           <NavLink
                to="/clientinfo"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<PiUsersThree></PiUsersThree>} label="Client Info" />
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<PiHairDryer></PiHairDryer>} label="Services" />
              </NavLink>
              <NavLink
                to="/Stock Management"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<FaBoxOpen></FaBoxOpen>} label="Stock Management" />
              </NavLink>
              <NavLink
                to="/Inventory Log"
                className={({ isActive }) =>
                  isActive ? "navlink active" : "navlink"
                }
              >
                <MenuItem icon={<MdOutlineInventory></MdOutlineInventory>} label="Inventory Log" />
              </NavLink>

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
