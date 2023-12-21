import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h2 className="text-3xl text-center">This is root folder</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;