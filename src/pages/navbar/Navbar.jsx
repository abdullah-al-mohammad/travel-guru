import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/news'>News</NavLink></li>
        <li><NavLink to='/destination'>Destination</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink className='btn btn-warning px-6' to='/login'>Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 bg-transparent">
            <img className='w-20 text-white' src={logo} alt="" />
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="navbar-start">
                    <label className="input input-bordered flex items-center gap-2 opacity-60 border-white">
                        <FaSearch></FaSearch>
                        <input type="text" className="grow" placeholder="Search your Destination..." />
                    </label>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;