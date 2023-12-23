import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTasks = () => {
    const {data: tasks=[],refetch} = useQuery({
         queryKey:['tasks'],
        queryFn:async()=>{
            const response = await axios.get('http://localhost:5000/todo')
            return response.data

        }
    })
    return [tasks,refetch]
    
};

export default useTasks;