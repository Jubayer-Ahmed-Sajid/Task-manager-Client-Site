import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Registration from "../Pages/Authorization/Registration/Registration";
import Login from "../Pages/Authorization/Login/Login";
import Home from "../Pages/Home/Home";
import UpdateTask from "../Pages/Home/Components/UpdateTask";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'registration',
                element:<Registration></Registration>

            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'tasks/:id',
                element:<UpdateTask></UpdateTask>,
                loader:({params})=> fetch(`http://localhost:5000/todo/${params.id}`)
            }
        ]

    }
])