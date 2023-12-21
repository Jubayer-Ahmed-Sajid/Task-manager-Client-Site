import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Registration from "../Pages/Authorization/Registration/Registration";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'registration',
                element:<Registration></Registration>

            }
        ]

    }
])