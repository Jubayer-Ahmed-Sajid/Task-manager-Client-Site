import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Registration from "../Pages/Authorization/Registration/Registration";
import Login from "../Pages/Authorization/Login/Login";
import Home from "../Pages/Home/Home";
import UpdateTask from "../Pages/Home/Components/UpdateTask";
import PrivateRoute from "./PrivateRoute";
import Todos from "../Pages/Todos/Todos";
import Completed from "../Pages/Completed/Completed";
import Welcome from "../Pages/Welcome/Welcome";
import Important from "../Pages/Important/Important";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Welcome></Welcome>
            },
            {
                path:'registration',
                element:<Registration></Registration>

            },
            {
                path:'/dashboard',
                element:<PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path:'todos',
                element:<PrivateRoute><Todos></Todos></PrivateRoute>

            },
            {
                path:'completed',
                element:<PrivateRoute><Completed></Completed></PrivateRoute>
            },
            {
                path:'most-important',
                element:<PrivateRoute><Important></Important></PrivateRoute>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'tasks/:id',
                element:<PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
                loader:({params})=> fetch(`https://task-manager-server-site-eok54iegp-jubayer-ahmed-sajid.vercel.app/todo/${params.id}`)
            }
        ]

    }
])