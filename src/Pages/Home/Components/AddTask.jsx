import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import Select from 'react-select'
import useAuth from "../../../Components/hooks/useAuth";
import useTasks from "../../../Components/hooks/useTasks";

const AddTask = () => {
    const { control, register, handleSubmit } = useForm()
    const [,refetch] = useTasks()
    const {user} = useAuth()
    const onSubmit = (data) =>{
        const task = {
            title: data.title,
            description:data.description,
            priority: data.priority.value,
            deadLine: data.deadLine,
            status:'todo',
            email: user.email,
        }
        axios.post('http://localhost:5000/todo',task)
        .then(res => {
            console.log(res.data)
        })
        refetch()
    } 


    return (
        <div className="py-2 ">

            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>+Add Task</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <br />
                        <input {...register("title", { required: true, maxLength: 20 })} placeholder="Task Name" className="py-2 border-transparent px-2 " autoFocus />
                        <br />
                        <br />
                        <textarea {...register("description", { required: true })} placeholder="Description" />
                        <br />
                        <label htmlFor="priority">Priority</label>
                        <br />
                        <Controller
                            name="priority"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={[
                                        { value: "low", label: "Low" },
                                        { value: "moderate", label: "Moderate" },
                                        { value: "high", label: "High" },
                                    ]}
                                />
                            )}
                        />
                        <br />
                        <label htmlFor="deadLine">Deadline</label>
                        <br />
                        <input type="date" {...register("deadLine",{required:true})}/>
                        <br />
                        <input type="submit" className="text-red-400 btn mt-8" value='Add to Task'/>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddTask;