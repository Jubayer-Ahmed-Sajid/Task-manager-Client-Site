import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import useTasks from "../../../Components/hooks/useTasks";
import useAxios from "../../../Components/hooks/useAxios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTask = () => {

    const [, refetch] = useTasks()
    const axiosPublic = useAxios()
    const todo = useLoaderData()
    console.log('this is todo', todo)
    const navigate = useNavigate()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            title: todo.title,
            description: todo.description,
            priority: { value: todo.priority, label: todo.priority },
            deadLine: todo.deadLine,
            status: todo.status
        },
    });

    const onSubmit = (data) => {
        console.log(data)
        const updatedTask = {

            title: data.title,
            description: data.description,
            priority: data.priority.value,
            deadLine: data.deadLine,
            status: todo.status

        }
        axiosPublic.patch(`https://task-manager-server-site-eok54iegp-jubayer-ahmed-sajid.vercel.app/todo/${todo._id}`, updatedTask)
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${todo.title} successfully updated`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/')
                    refetch()
                }
            })

    }
    return (
        <div className="w-3/4 mx-auto bg-slate-300 py-4 px-8 rounded-lg my-auto h-full">
            <div className='text-left'>


                <form onSubmit={handleSubmit(onSubmit)} className="text-black">
                    <br />
                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => <input {...field} />}
                    />
                    <br />
                    <br />
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => <textarea className="textarea"  {...field} />}
                    />
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
                    <Controller
                        name="deadLine"
                        control={control}
                        render={({ field }) => <input type='date' {...field} />}
                    />
                    <br />
                    <input type="submit" className='btn mt-4 bg-red-600' value='Save'></input>
                </form>

            </div>
        </div>
    );
};

export default UpdateTask;