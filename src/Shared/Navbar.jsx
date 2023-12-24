import { Link, NavLink } from "react-router-dom";
import useAuth from "../Components/hooks/useAuth";

const Navbar = () => {
    const { user, LogOut, loading } = useAuth()
    if (loading) {
        return <h2>loading...</h2>
    }
    const handleLogout =()=>{
        LogOut()
        .the(()=>{
            console.log('Successfully logged out')
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }
    const navList = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/todos'>Todo</NavLink>
        </li>
        <li>
            <NavLink to='/Done'>Completed</NavLink>
        </li>
        {user ? <button className="hover:bg-slate-200 px-4 rounded-lg" onClick={handleLogout}>Logout</button> :<>
        <li>
            <NavLink to='/Login'>Login</NavLink>
        </li> 
        </>
        }
    </>
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <p>{user.displayName}</p>
                            <img src={user.photoURL} className="w-12 h-12 rounded-[48px] mx-4" alt="" />
                        </> : <Link to='/login' className="btn btn-ghost px-4 py-3">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;







