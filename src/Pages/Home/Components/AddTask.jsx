import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import Select from 'react-select'

const AddTask = () => {
    const { control, register, handleSubmit } = useForm()
    const onSubmit = (data) =>{
        const task = {
            title: data.taskName,
            description:data.description,
            priority: data.priority.value,
            deadLine: data.deadline
        }
        axios.post('http://localhost:5000/todo',task)
        .then(res => {
            console.log(res.data)
        })
    } 


    return (
        <div className="py-2 ">

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>+Add Task</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <br />
                        <input {...register("taskName", { required: true, maxLength: 20 })} placeholder="Task Name" className="py-2 border-transparent px-2 " autoFocus />
                        <br />
                        <br />
                        <textarea {...register("Description", { required: true })} placeholder="Description" />
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
                        <label htmlFor="deadline">Deadline</label>
                        <br />
                        <input type="date" {...register("deadline",{required:true})}/>
                        <br />
                        <input type="submit" />
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