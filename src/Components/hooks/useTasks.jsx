import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useTasks = () => {
    const {user} = useAuth()
    const {data: tasks=[],refetch} = useQuery({
         queryKey:['tasks'],
        queryFn:async()=>{
            const response = await axios.get(`http://localhost:5000/todo?email=${user.email}`)
            return response.data

        }
    })
    return [tasks,refetch]
    
};

export default useTasks;