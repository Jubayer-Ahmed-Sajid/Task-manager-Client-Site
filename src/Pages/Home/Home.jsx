import AddTask from "./Components/AddTask";

const Home = () => {
    return (
        <div>
            <AddTask></AddTask>
            <div className="grid grid-cols-3 text-center">
                <div className="border-r-2 border-gray-300 h-screen">
                    To Do
                </div>
                <div className="border-r-2 border-gray-300 h-screen">
                    On going
                </div>
                <div>
                    Completed
                </div>
            </div>

            
        </div>
    );
};

export default Home;