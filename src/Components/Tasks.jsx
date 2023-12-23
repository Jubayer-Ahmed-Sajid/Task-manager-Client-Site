import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'
import itemTypes from './Card'
import Swal from 'sweetalert2';
import { FaCalendar, FaEdit, FaRegCircle } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

const Tasks = ({ todo }) => {
  const { title, description, deadLine, priority, status } = todo
  const [{ isDragging }, drag] = useDrag({
    type: itemTypes.CARD,
    item: { todo },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        Swal
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1;
  return (

    <div ref={drag} style={{ opacity }} className='border-t flex justify-around border-gray-300 py-8 mx-4 w-full my-4'>
      <div>

        <div className='flex items-center justify-center gap-4'>
          <button className={`${priority === 'low' ? 'text-green' : priority === 'moderate' ? 'text-yellow-400' : 'text-red-600'} hover:bg-red-500 rounded-full`}>

            <FaRegCircle></FaRegCircle>
          </button>
          <p className='text-white'>{title}</p>
        </div>
        <p className='text-[#666666]'>{description}</p>
        <p className='flex items-center gap-4 justify-center'><FaCalendar></FaCalendar>{deadLine}</p>
      </div>
      <div>
        <div className='flex gap-4 text-xl'>
<button>
        <FaEdit></FaEdit>
  </button>
  <button>

        <MdDelete></MdDelete>
  </button>
        </div>

      </div>

    </div>
  )
}

Tasks.propTypes = {
  todo: PropTypes.object

}

export default Tasks
