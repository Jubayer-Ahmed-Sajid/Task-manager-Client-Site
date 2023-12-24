import { Link } from 'react-router-dom';
import './Welcome.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Welcome = () => {
    Aos.init({
        duration:1500,
    })
    return (
        <div>

        <div className="welcome-page h-[900px] object-cover">
            <div className="overlay item" data-aos="zoom-in" >
                <h2  className="text-4xl text-center mt-8">Welcome to Task <span className='text-red-500'> Management</span></h2>
                <p className='text-center lg:w-1/3 py-2'>Empower Your Productivity: Streamline task management, enhance collaboration, and achieve efficiency with our intuitive platform designed for seamless project coordination and successful project completion</p>

                <Link className='btn btn-secondary my-8' to='/login'>Explore Now</Link>
            </div>
            

        </div>
        </div>
    );
};

export default Welcome;