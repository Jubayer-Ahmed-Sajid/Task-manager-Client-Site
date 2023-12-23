import PropTypes from 'prop-types'
import useTasks from './hooks/useTasks'
import Tasks from './Tasks'
import axios from 'axios'
import itemTypes from './Card'
import { useDrop } from 'react-dnd'

const TodoZone = ({status}) => {
  const [tasks, refetch] = useTasks()
  console.log(tasks)
  const todos = tasks.filter(todo => todo.status === 'todo')
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: itemTypes.CARD,
    drop: async (item,) => {
      const updatedItem = { title: item.todo.title, priority: item.todo.priority, deadline: item.todo.deadline, status: status }


      await axios.patch(`http://localhost:5000/todo/${item.todo._id}`, updatedItem)
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
  let backgroundColor = '#06af98'
  if (isActive) {
    backgroundColor = '#d9f9a5'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ backgroundColor }} className="border-r-2 w-full border-gray-300 h-full">
      <h2 className='text-center text-2xl font-bold mb-3'>Todo</h2>
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
