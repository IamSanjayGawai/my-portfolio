

const Top = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Welcome, Admin!
          </h1>
          <p className="text-gray-700 text-center mb-6">
            Manage your dashboard efficiently and keep everything organized.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
              View Reports
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
              Manage 
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
              Settings
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Top;
  