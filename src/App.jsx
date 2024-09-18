import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import { AuthProvider } from "./context/AuthContex";
import TasksPage from "./pages/TasksPage";
import TasksFormPage from "./pages/TasksFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import { TaskProvider } from "./context/TasksContext";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main  className="container mx-auto px-10">
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TasksFormPage />} />
                <Route path="/tasks/:id" element={<TasksFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
