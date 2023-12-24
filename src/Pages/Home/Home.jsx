import AddTask from "./Components/AddTask";

import TodoZone from "../../Components/TodoZone";
import OngoingZone from "../../Components/OngoingZone";
import CompletedZone from "../../Components/CompletedZone";
import useAuth from "../../Components/hooks/useAuth";
import './Home.css'
const Home = () => {
  const {loading} = useAuth()
  if(loading){
    return <h2>Loading...</h2>
  }
  


  return (
    <div>
      <section className="user-segments mb-4 rounded-lg ">
                <h2>Who Can Benefit?</h2>
                <div className="user-segment-cards">
                    <div className="user-segment-card overlay w-1/2 mx-auto">
                        <h3 className="text-4xl text-center font-bold">This Task Manager is specially for <br /> <span className="text-red-400 py-2">Developers</span></h3>
                        <p className="text-[white] text-center">Efficiently manage coding tasks and project deadlines. <br /> Efortlessly move tasks from todo to ongoing or from ongoing to completed and around.</p>
                    <AddTask></AddTask>
                    </div>

                </div>
            </section>
      <div className="grid gap-2 lg:grid-cols-3 mx-4 text-center">
        <TodoZone status={'todo'}></TodoZone>
        <OngoingZone status={'ongoing'}></OngoingZone>
        <CompletedZone status={'completed'}></CompletedZone>
      </div>


    </div>
  );
};

export default Home;