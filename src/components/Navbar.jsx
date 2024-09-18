import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContex";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate()
  

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600  mx-auto rounded-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <h1 className="text-white text-xl font-bold">Task Manager</h1>
          </Link>
          {isAuthenticated ? (
            <>
              <div>
                <button
                  onClick={()=>{
                    navigate('/profile');
                  }}
                  className="text-white hover:text-gray-200 px-4"
                >
                  Profile
                </button>
                <button
                  onClick={()=>{
                    navigate('/tasks');
                  }}
                  className="text-white hover:text-gray-200 px-4"
                >
                  Tasks
                </button>
                <button
                  onClick={() => {
                    navigate('/add-Task');
                  }}
                  className="text-white hover:text-gray-200 px-4"
                >
                  New Task
                </button>
                <button
                  className="text-white hover:text-gray-200 px-4"
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link
                  to="/login"
                  className="text-white hover:text-gray-200 px-4"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white hover:text-gray-200 px-4"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
