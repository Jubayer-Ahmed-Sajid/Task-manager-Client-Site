import { Navigate } from "react-router-dom";
import useAuth from "../Components/hooks/useAuth";
import PropTypes from 'prop-types'


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <span className="loading loading-spinner text-error"></span>
            </div>
        )
    }
    else if (user?.email) {
        return (
            children
        )
    }
    else {
        return <Navigate to='/login' replace></Navigate>
    }

};
PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;