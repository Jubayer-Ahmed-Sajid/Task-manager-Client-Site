import { FaCalendar, FaEdit, FaRegCircle } from "react-icons/fa";
import { MdDelete, MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";
import useTasks from "../../Components/hooks/useTasks";
import useAxios from "../../Components/hooks/useAxios";
import Swal from "sweetalert2";

const Todos = () => {
    const [tasks,refetch] = useTasks()
    const todos = tasks.filter(todo => todo.status === 'todo')
    const axiosPublic = useAxios()
    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
          if (result.isConfirmed) {
            await axiosPublic.delete(`/todo/${id}`)
              .then(res => {
                console.log(res.data)
                if (res.data.deletedCount) {
    
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

    return (
        <div>
            {
                todos.map(todo=>  <div key={todo._id} className='border-t flex justify-around border-gray-300 py-8 mx-4 w-full my-4'>
                <div className='space-y-2 w-1/2' >
    
                    <div className='flex items-center justify-start gap-4'>
                        <button className={` ${todo.priority === 'low' ? 'text-white' : todo.priority === 'moderate' ? 'text-yellow-400' : 'text-red-600'} hover:bg-red-500 rounded-full`}>
    
                            <FaRegCircle></FaRegCircle>
                        </button>
                        <p className='text-[#333333]'>{todo.title}</p>
                    </div>
                    <p className='text-[#666666] flex gap-4 items-center justify-start'><MdDescription></MdDescription> {todo.description}</p>
                    <p className='flex items-center gap-4 justify-start'><FaCalendar></FaCalendar>{todo.deadLine}</p>
                </div>
    
                {/* Update and delete task */}
                <div>
                    <div className='flex gap-4 text-xl'>
                        {/* Update task */}
                        <Link to={`/tasks/${todo._id}`} className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}><FaEdit></FaEdit></Link>
    
                        {/* Delete Task */}
    
                        <button onClick={()=>handleDelete(todo._id)}>
    
                            <MdDelete></MdDelete>
                        </button>
                    </div>
    
                </div>
    
            </div >)
            }
        </div>
       
    );
};

export default Todos;