import { useDrop } from "react-dnd";
import Tasks from "./Tasks";
import useTasks from "./hooks/useTasks";
import itemTypes from "./Card";
import axios from "axios";
import PropTypes from 'prop-types'


const CompletedZone = ({status}) => {
    const [tasks,refetch] = useTasks()
    const completedTasks = tasks.filter(completed => completed.status === 'completed')
    const [{isOver,canDrop}, drop] = useDrop({
        accept:itemTypes.CARD,
        drop:async(item)=>{
            const updatedTask = {title:item.title,deadLine: item.todo.deadLine, priority:item.todo.priority, status: status}
            await axios.patch(`http://localhost:5000/todo/${item.todo._id}`, updatedTask)
            .then(res =>{
                console.log(res.data)
            })
            refetch(),
            ({name:status})

        },
        collect: (monitor)=>({
            isOver:monitor.isOver(),
            canDrop: monitor.canDrop()
        
        })
        
    })
    const isActive = canDrop && isOver
    let backgroundColor = '#06af98'
    if (isActive) {
        backgroundColor = '#d9f9a5'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        <div ref={drop} style={{ backgroundColor }}  className="border-r-2  border-gray-300 h-full">\
        <h2 className="text-2xl text-center font-bold mb-2">Completed</h2>
            {
                completedTasks.map(completed => <Tasks key={completed._id} todo={completed}></Tasks>)
            }
        </div>
    );
};
CompletedZone.propTypes ={
    status: PropTypes.string
}

export default CompletedZone;