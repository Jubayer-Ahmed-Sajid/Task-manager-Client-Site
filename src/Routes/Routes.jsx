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
                path:'login',
                element:<Login></Login>
            },
            {
                path:'tasks/:id',
                element:<PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/todo/${params.id}`)
            }
        ]

    }
])