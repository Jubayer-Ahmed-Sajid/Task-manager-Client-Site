import { MdDelete, MdDescription } from "react-icons/md";
import useTasks from "../../Components/hooks/useTasks";
import useAxios from "../../Components/hooks/useAxios";
import Swal from "sweetalert2";

const Completed = () => {
    const [tasks,refetch] = useTasks()
    const completedTasks = tasks.filter(completed => completed.status === 'completed')
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
            await axiosPublic.delete(`/completed/${id}`)
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
            <h2 className="text-2xl font-bold py-4 text-center">Task Done</h2>
            {
                completedTasks.map(completed=>  <div key={completed._id} className='border-t flex justify-around border-gray-300 py-8 mx-4 w-full my-4'>
                <div className='space-y-2 w-1/2' >
    
                    <div className='flex items-center justify-start gap-4'>
                        <button className={` ${completed.priority === 'low' ? 'text-white' : completed.priority === 'moderate' ? 'text-yellow-400' : 'text-red-600'} hover:bg-red-500 rounded-full`}>
    
                            <FaRegCircle></FaRegCircle>
                        </button>
                        <p className='text-[#333333]'>{completed.title}</p>
                    </div>
                    <p className='text-[#666666] flex gap-4 items-center justify-start'><MdDescription></MdDescription> {completed.description}</p>
                    <p className='flex items-center gap-4 justify-start'><FaCalendar></FaCalendar>{completed.deadLine}</p>
                </div>
    
                {/* Update and delete task */}
                <div>
                    <div className='flex gap-4 text-xl'>
                        {/* Update task */}
                       
    
                        {/* Delete Task */}
    
                        <button className="btn text-xl " onClick={()=>handleDelete(completed._id)}>
    
                            <MdDelete></MdDelete>
                        </button>
                    </div>
    
                </div>
    
            </div >)
            }
        </div>
       
    );
};

export default Completed;