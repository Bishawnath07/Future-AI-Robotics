import { Link } from "react-router-dom"
import logo from './Logo/home1-logo.png'
import images from './Logo/download.jpeg'
import Bannar from "../../Pages/HomePage/Home/Bannar/Bannar";
import './Navbar.css'
import { HiChevronRight } from "react-icons/hi";


const Navbar = () => {
    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    // Nav links
    const navItems = (
        <>
            <li onClick={handleClick}>
                <Link to={"/"}>Home</Link>
            </li>

            <li onClick={handleClick}>
                <Link to={"/about"}>About</Link>
            </li>
            <li onClick={handleClick}>
                <Link to={"/page"}>Page</Link>
            </li>
            <li onClick={handleClick}>
                <Link to={"/block"}>Block</Link>
            </li>
            <li onClick={handleClick}>
                <Link to={"/service"}>Service</Link>
            </li>
            <li onClick={handleClick}>
                <Link to={"/contact"}>

                </Link>
            </li>

        </>
    );

    return (
        <div className="max-w-7xl mx-auto md:pt-4 overflow-hidden">
            <div className="container absolute text-white mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown  z-10">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm absolute font dropdown-content  bg-[#0d2434]  z-[1] p-2   shadow font-bold rounded-box w-52 "
                            >
                                {navItems}

                            </ul>
                        </div>
                        <img
                            className=" w-[100px] lg:w-[170px] md:w-[100px]  "
                            src={logo}
                            alt=""
                        />


                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal px-1   font font-[400] text-[1.5rem] gap-[25px]">
                            {navItems}
                        </ul>
                    </div>

                    {/* end navber */}
                    <div className='talk-btn hidden lg:flex items-center justify-between bg-[#2b9ef0] rounded-full  p-2 text-black lg:font-bold text-center w-[10rem] md:w-[15rem]'>
                        <button className='md:text-[20px] text-[13px]' >  Lets Talk</button>
                        <HiChevronRight className='bg-white lg:h-10 h-6  w-6 lg:w-10 text-red-600 p-1 md:p-2 rounded-full'></HiChevronRight>
                    </div>

                    <div className="dropdown dropdown-end avatar-div">

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={images} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#0d2434] mt-3 z-[1] p-2 shadow rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

                {/* <hr className=" mx-auto mt-2" /> */}

            </div>
            <Bannar className='relative'></Bannar>
        </div>
    );
};


export default Navbar;