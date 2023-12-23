import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'
import itemTypes from './Card'
import Swal from 'sweetalert2';
import { FaCalendar, FaEdit, FaRegCircle } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import useAxios from './hooks/useAxios';
import useTasks from './hooks/useTasks';

const Tasks = ({ todo }) => {
  const axiosPublic = useAxios()
  const [,refetch] = useTasks()
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
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        await axiosPublic.delete(`/todo/${todo._id}`)
        .then(res =>{
          console.log(res.data)
          if(res.data.deletedCount){

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            refetch()
          }
        })
      }
    });
  }
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
          <button onClick={handleDelete}>

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
