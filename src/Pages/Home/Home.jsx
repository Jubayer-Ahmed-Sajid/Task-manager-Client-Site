import AddTask from "./Components/AddTask";

import TodoZone from "../../Components/TodoZone";
import OngoingZone from "../../Components/OngoingZone";
import CompletedZone from "../../Components/CompletedZone";
import useAuth from "../../Components/hooks/useAuth";
// import { ItemTypes } from './ItemTypes.js'
const Home = () => {
  const {loading} = useAuth()
  if(loading){
    return <h2>Loading...</h2>
  }
  


  return (
    <div>
      <AddTask></AddTask>
      <div className="grid grid-cols-3 text-center">
        <TodoZone status={'todo'}></TodoZone>
        <OngoingZone status={'ongoing'}></OngoingZone>
        <CompletedZone status={'completed'}></CompletedZone>
      </div>


    </div>
  );
};

export default Home;