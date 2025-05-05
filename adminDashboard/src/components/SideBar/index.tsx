import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { LuUsersRound } from "react-icons/lu";
import { RiGalleryView2 } from "react-icons/ri";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
// import { useDispatch } from "react-redux";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
  }
  
  const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    // const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showModal, setShowModal] = useState(false);
  
    // const location = useLocation();
    // const { pathname } = location;
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);
  
    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    const [sidebarExpanded] = useState(
      storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    );
  
    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }: MouseEvent) => {
        if (!sidebar.current || !trigger.current) return;
        if (
          !sidebarOpen ||
          sidebar.current.contains(target) ||
          trigger.current.contains(target)
        )
          return;
        setSidebarOpen(false);
      };
      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    });
  
    // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }: KeyboardEvent) => {
        if (!sidebarOpen || keyCode !== 27) return;
        setSidebarOpen(false);
      };
      document.addEventListener("keydown", keyHandler);
      return () => document.removeEventListener("keydown", keyHandler);
    });
  
    useEffect(() => {
      localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
      if (sidebarExpanded) {
        document.querySelector("body")?.classList.add("sidebar-expanded");
      } else {
        document.querySelector("body")?.classList.remove("sidebar-expanded");
      }
    }, [sidebarExpanded]);

    const handleLogout = () => {
      // dispatch(logOut());
     setTimeout (() => navigate("/"), 2000);
    };

    const handleConfirmLogout = () => {
      handleLogout();
      setShowModal(false);
    };
  
    const handleCancelLogout = () => {
      setShowModal(false);
    };

  return (
    // <div
    // ref={sidebar}
    //  className={`fixed inset-y-0 left-0 z-40 h-screen hidden flex-col md:w-44 lg:w-64 transform bg-gray-800 transition-transform duration-300 ease-in-out 
    //  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex`}>
    <div
    ref={sidebar}
    className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-800 transition-transform duration-300 ease-in-out
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:flex h-screen flex-col`}
    >
        <div className="flex items-center justify-center h-16 bg-gray-900">
        <div className="flex flex-shrink-0 p-4">
            <a href="#" className="text-2xl font-bold text-gray-100">
              LEVEL
            </a>
            <div className="flex items-center">
          <img src="/logo.png" className="h-8"/>
          <a href="#" className="text-2xl font-bold text-gray-100">
          UP
          </a>
        </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 bg-gray-800">
          <div>
          <ul className="h-[86vh] flex flex-col gap-2 mt-5 justify-between justify-between">
          <div>
          <li>
            <NavLink to="/participants" className={({ isActive }) => `flex items-center p-4 text-gray-100 ${isActive ? "text-gray-100 bg-gray-700" : "hover:bg-gray-700"}`}>
            <LuUsersRound className="h-4 w-4 mr-2"/>
              <span>Participants</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/newsAndGallery" className={({ isActive }) => `flex items-center p-4 text-gray-100 ${isActive ? "text-gray-100 bg-gray-700" : "hover:bg-gray-700"}`}>
            <RiGalleryView2 className="h-4 w-4 mr-2"/>
              <span>News & Gallery</span>
            </NavLink>
          </li>
          </div>
          <div>
          <li>
            <NavLink to="/settings" className={({ isActive }) => `flex items-center p-4 text-gray-100 ${isActive ? "text-gray-100 bg-gray-700" : "hover:bg-gray-700"}`}>
            <IoSettingsOutline className="h-4 w-4 mr-2"/>
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
          <button
          onClick={() => setShowModal(true)}
          className={`group relative flex items-center gap-2 py-2 px-4 text-gray-100 duration-300 ease-in-out hover:bg-graydark hover:rounded-full`}>
            <IoLogOutOutline className='text-lg' />
            Log Out
          </button>
          </li>
          </div>
          </ul>
        </div>
        </nav>
        </div>
        
    {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-[90%] max-w-sm">
          <h2 className="text-lg font-semibold mb-4">Confirm Logout</h2>
          <p className="text-sm text-gray-600 mb-6">Are you sure you want to logout?</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={handleCancelLogout}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmLogout}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default Sidebar
