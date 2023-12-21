import { NavLink } from "react-router-dom";
import useAuth from "../Components/hooks/useAuth";
import { FaListAlt } from "react-icons/fa";

const Navbar = () => {
    const {user,loading} = useAuth()
    if(loading){
        return <h2>Loading....</h2>
    }
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn text-4xl m-4 bg-transparent border-none drawer-button">
                        <FaListAlt></FaListAlt>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <div className="space-y-2">
                            <img src={user.photoURL} className="w-16 h-16 rounded-[96px]" alt="" />
                            <p>{user.displayName}</p>
                        </div>
                        {/* Sidebar content here */}
                        <li>

                        <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>

                        <NavLink to='/registration'>Login</NavLink>
                        </li>
                        <li><a>Sidebar Item 2</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;