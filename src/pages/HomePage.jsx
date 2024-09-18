import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-700">
      {/* Hero Section */}
      <header className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Task Manager</h2>
          <p className="text-lg mb-8">
            Manage your tasks efficiently and stay productive.
          </p>
          <Link
            to="/tasks"
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Our Features</h3>
            <p className="text-gray-600 mt-4">
              Explore the powerful features that make managing your tasks easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Feature 1"
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Create Tasks</h4>
              <p className="text-gray-600">
                Easily create tasks and organize your workflow efficiently.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Feature 2"
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Manage Deadlines</h4>
              <p className="text-gray-600">
                Keep track of deadlines and never miss an important task.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Feature 3"
                className="mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-2">User Dashboard</h4>
              <p className="text-gray-600">
                Access your personal dashboard to manage all your tasks in one
                place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
