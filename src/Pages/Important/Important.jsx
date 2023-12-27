import { MdDelete, MdDescription } from "react-icons/md";
import useTasks from "../../Components/hooks/useTasks";
import useAxios from "../../Components/hooks/useAxios";
import Swal from "sweetalert2";
import { FaCalendar, FaRegCircle } from "react-icons/fa";

const Important = () => {
    const [tasks,refetch] = useTasks()
    const importantTasks = tasks.filter(task => task.priority === 'high')
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
            <h2 className="text-2xl font-bold py-4 text-center">Most Important</h2>
            {
                importantTasks.map(important=>  <div key={important._id} className='border-t flex justify-around border-gray-300 py-8 mx-4 w-full my-4'>
                <div className='space-y-2 w-1/2' >
    
                    <div className='flex items-center justify-start gap-4'>
                        <button className={` ${important.priority === 'low' ? 'text-white' : important.priority === 'moderate' ? 'text-yellow-400' : 'text-red-600'} hover:bg-red-500 rounded-full`}>
    
                            <FaRegCircle></FaRegCircle>
                        </button>
                        <p className='text-[#333333]'>{important.title}</p>
                    </div>
                    <p className='text-[#666666] flex gap-4 items-center justify-start'><MdDescription></MdDescription> {important.description}</p>
                    <p className='flex items-center gap-4 justify-start'><FaCalendar></FaCalendar>{important.deadLine}</p>
                </div>
    
                {/*delete task */}
                <div>
                    <div className='flex gap-4 text-xl'>
                       
                       
    
                        {/* Delete Task */}
    
                        <button className="btn text-xl " onClick={()=>handleDelete(important._id)}>
    
                            <MdDelete></MdDelete>
                        </button>
                    </div>
    
                </div>
    
            </div >)
            }
        </div>
       
    );
};

export default Important;