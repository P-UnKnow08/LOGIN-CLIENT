import { useAuth } from "../context/AuthContex"; // Asegúrate de tener el contexto Auth
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function ProfilePage() {
  const { user } = useAuth(); 

  return (
    <div className="h-screen flex flex-col">
      {/* Sección de perfil */}
      <div className="flex-grow flex items-center justify-center bg-gray-800 py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Profile
          </h1>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <strong className="text-gray-600">Username:</strong>
              <span className="text-gray-900">{user?.username}</span>
            </div>

            <div className="flex items-center space-x-2">
              <strong className="text-gray-600">Email:</strong>
              <span className="text-gray-900">{user?.email}</span>
            </div>

            <div className="flex items-center space-x-2">
              <strong className="text-gray-600">Id:</strong>
              <span className="text-gray-900">{user?.id}</span>
            </div>

            <div className="flex items-center space-x-2">
              <strong className="text-gray-600">Date:</strong>
              <span className="text-gray-900">
                {dayjs(user.createdAt).utc().format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
