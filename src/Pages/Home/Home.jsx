import axios from "axios";
import AddTask from "./Components/AddTask";
import { useEffect, useState } from "react";

import Todo from "../../Components/Todo";
// import { ItemTypes } from './ItemTypes.js'
const Home = () => {
    const [todos,setTodo] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/todo');
            setTodo(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

   

    return (
        <div>
            <AddTask></AddTask>
            <div className="grid grid-cols-3 text-center">
                <div className="border-r-2  border-gray-300 h-screen">
                    <h2>Todo</h2>
                    <hr />
                    {
                        todos.map(todo => <Todo key={todo._id} todo={todo}></Todo>)
                    }
                </div>
                <div className="border-r-2 border-gray-300 h-screen">
                    On going
                </div>
                <div>
                    Completed
                </div>
            </div>

            
        </div>
    );
};

export default Home;