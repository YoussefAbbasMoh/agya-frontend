import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import SidebarGuest from "../components/sidebar-guest.js";
import {useContext } from "react";
import { GlobalContext } from "../context/GlobelContext.js";
import LatestActivities from "../components/LatestActivities";

function AboutLayout() {
  const {isAuthUser } = useContext(GlobalContext);
  const auth = isAuthUser?.email;
  return (
    <div className={`px-4 w-full lg:px-[150px]`}>
      <Navbar />
      <div className={`flex my-10 flex-col lg:flex-row`}>
        {/* Conditionally render sidebars for non-mobile screens */}
        <div className=" hidden lg:flex">
        {
          (auth ? (
            <Sidebar className="bg-gray-800 text-white" />
          ) : (
            <SidebarGuest />
          ))}
        </div>

        {/* Adjust content to take full width on mobile */}
        <div
          className={`flex-grow flex justify-center items-center
             w-full lg:w-3/5
          `}
        >
          <Outlet />
        </div>

        {/* Conditionally render latest activities for non-mobile screens */}
         <div className=" hidden lg:flex">
         <LatestActivities />
         </div>
      </div>
    </div>
  );
}

export default AboutLayout;
