import itemTypes from './Card'
import { useDrop } from 'react-dnd'
import axios from 'axios'
import useTasks from './hooks/useTasks'
import Tasks from './Tasks'
import PropTypes from 'prop-types'
import Aos from 'aos'
import 'aos/dist/aos.css';

const OngoingZone = ({ status }) => {
    const [tasks, refetch] = useTasks()
    const ongoings = tasks.filter(ongoing => ongoing.status === 'ongoing')
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: itemTypes.CARD,
        drop: async (item,) => {
            const updatedItem = {
                title: item.todo.title,
                priority: item.todo.priority,
                deadLine: item.todo.deadLine,
                description: item.todo.description,
                status: status
            }


            await axios.patch(`https://task-manager-server-site-eok54iegp-jubayer-ahmed-sajid.vercel.app/todo/${item.todo._id}`, updatedItem)
                .then(res => {
                    console.log(res.data)
                }),
                refetch(),
                ({ name: status })
        }
        ,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    let backgroundColor = '#32CD32'
    if (isActive) {
        backgroundColor = '#d9f9a5'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    Aos.init({
        duration:1500,
    })
    return (
        <div data-aos="zoom-in" ref={drop} style={{ backgroundColor }}className="border-r-2 w-full shadow-2xl rounded-lg border-gray-300 h-full">
            <h2 className="text-2xl text-center font-bold py-2">On going</h2>
            {
                ongoings.map(ongoing => <Tasks key={ongoing._id} todo={ongoing}></Tasks>)
            }

        </div>
    )
}
OngoingZone.propTypes = {
    status: PropTypes.string,
};

export default OngoingZone
