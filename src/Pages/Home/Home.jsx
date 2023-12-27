import AddTask from "./Components/AddTask";

import TodoZone from "../../Components/TodoZone";
import OngoingZone from "../../Components/OngoingZone";
import CompletedZone from "../../Components/CompletedZone";
import './Home.css'
import Aos from "aos";
import 'aos/dist/aos.css';
import useAuth from "../../Components/hooks/useAuth";
import { FaFlag, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
  const { user } = useAuth()

  Aos.init({
    duration: 1500,
  })


  return (
    <div className="grid lg:grid-cols-4 gap-0">
      <section className="pl-4 h-screen mb-4 mx-0 col-span-1 rounded-lg bg-slate-600">
        <h2 className="text-2xl my-4 text-white text-center">Dashboard</h2>
        <div className=" mt-2 py-4 space-y-3 text-white mb-4">
          <div className="flex gap-2 items-center">
            <img src={user.photoURL} className="ml-4 w-12 h-12 rounded-full" alt="" />
            <p className="">{user.displayName}</p>
          </div>
          <p className="hover:bg-slate-300 px-4 w-3/4 py-2 flex items-center gap-2 rounded-lg"><FaPlus className="text-red-500"></FaPlus> <AddTask>AddTask</AddTask></p>
          <Link to={'/most-important'} className="flex hover:bg-slate-300 px-4 w-3/4 py-2 rounded-lg items-center gap-2"><FaFlag className="text-red-500"></FaFlag> Most Important</Link>

        </div>
      </section>
      <div className="grid col-span-3 gap-2 lg:grid-cols-3 mx-1 text-center">
        <TodoZone status={'todo'}></TodoZone>
        <OngoingZone status={'ongoing'}></OngoingZone>
        <CompletedZone status={'completed'}></CompletedZone>
      </div>


    </div>
  );
};

export default Home;