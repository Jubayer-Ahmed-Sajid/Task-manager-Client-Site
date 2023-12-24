import { useDrop } from "react-dnd";
import Tasks from "./Tasks";
import useTasks from "./hooks/useTasks";
import itemTypes from "./Card";
import axios from "axios";
import PropTypes from 'prop-types'
import Aos from "aos";
import 'aos/dist/aos.css';

const CompletedZone = ({ status }) => {
    const [tasks, refetch] = useTasks()
    const completedTasks = tasks.filter(completed => completed.status === 'completed')
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: async (item) => {
            const updatedTask = {
                title: item.todo.title,
                deadLine: item.todo.deadLine,
                priority: item.todo.priority,
                description: item.todo.description,
                status: status
            }
            await axios.patch(`https://task-manager-server-site-eok54iegp-jubayer-ahmed-sajid.vercel.app/todo/${item.todo._id}`, updatedTask)
                .then(res => {
                    console.log(res.data)
                })
            refetch(),
                ({ name: status })

        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()

        })

    })
    const isActive = canDrop && isOver
    let backgroundColor = '#9ee7b8'
    if (isActive) {
        backgroundColor = '#d9f9a5'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    Aos.init({
        duration:1500,
    })
    return (
        <div data-aos="zoom-in" ref={drop} style={{ backgroundColor }} className="border-r-2 w-full shadow-2xl rounded-lg border-gray-300 h-full">
            <h2 className="text-2xl text-center font-bold py-2">Completed</h2>
            {
                completedTasks.map(completed => <Tasks key={completed._id} todo={completed}></Tasks>)
            }
        </div>
    );
};
CompletedZone.propTypes = {
    status: PropTypes.string
}

export default CompletedZone;