import AddTask from "./Components/AddTask";

import TodoZone from "../../Components/TodoZone";
import OngoingZone from "../../Components/OngoingZone";
// import { ItemTypes } from './ItemTypes.js'
const Home = () => {
  


  return (
    <div>
      <AddTask></AddTask>
      <div className="grid grid-cols-3 text-center">
        <TodoZone status={'todo'}></TodoZone>
        <OngoingZone status={'ongoing'}></OngoingZone>
        <div>
          Completed
        </div>
      </div>


    </div>
  );
};

export default Home;