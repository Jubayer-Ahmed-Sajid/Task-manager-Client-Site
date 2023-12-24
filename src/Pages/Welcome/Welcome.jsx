import { Link } from 'react-router-dom';
import './Welcome.css'
const Welcome = () => {
    return (
        <div>

        <div className="welcome-page h-[900px] object-cover">
            <div className="overlay">
                <h2 className="text-4xl">Welcome to Task <span className='text-red-500'> Management</span></h2>
                <p className='text-center w-1/3 py-2'>Empower Your Productivity: Streamline task management, enhance collaboration, and achieve efficiency with our intuitive platform designed for seamless project coordination and successful project completion</p>

                <Link className='btn btn-secondary my-8' to='/login'>Explore Now</Link>
            </div>
            

        </div>
        </div>
    );
};

export default Welcome;