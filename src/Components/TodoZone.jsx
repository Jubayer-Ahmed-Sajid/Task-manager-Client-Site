import PropTypes from 'prop-types'
import useTasks from './hooks/useTasks'
import Tasks from './Tasks'
import axios from 'axios'
import itemTypes from './Card'
import { useDrop } from 'react-dnd'
import Aos from 'aos'
import 'aos/dist/aos.css';
const TodoZone = ({status}) => {
  const [tasks, refetch] = useTasks()
  console.log(tasks)
  const todos = tasks.filter(todo => todo.status === 'todo')
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: itemTypes.CARD,
    drop: async (item,) => {
      const updatedItem = { 
        title: item.todo.title, 
        priority: item.todo.priority, 
        deadline: item.todo.deadline,
        description: item.todo.description,
        status: status }


      await axios.patch(`https://task-manager-server-site-eok54iegp-jubayer-ahmed-sajid.vercel.app/todo/${item.todo._id}`, updatedItem)
        .then(res => {
          console.log(res.data)
        }),
        refetch()
      console.log(item.todo._id),
        ({ name: 'Ongoing' })
    }
    ,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  let backgroundColor = ' #FFA07A'
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
      <h2 className='text-center text-2xl font-bold  py-2'>Todo</h2>
      {
        todos.map(todo => <Tasks key={todo._id} todo={todo}></Tasks>)
      }



    </div>
  )
}

TodoZone.propTypes = {
  status: PropTypes.string
}

export default TodoZone
