import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetails from "./components/BlogDetails";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./admin/pages/Login";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const AppContent = () => {
  const location = useLocation();

  // Check if the current route includes "admin"
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />} {/* Show Navbar only for non-admin routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog-detail/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
      {!isAdminRoute && <Footer />} {/* Show Footer only for non-admin routes */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;



// import Home from './pages/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BlogDetails from './components/BlogDetails';
// import Dashboard from './admin/pages/Dashboard';
// import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="blog-detail/:id" element={<BlogDetails />} />

//           {/* Protected Route */}
//           <Route
//             path="/admin"
//             element={<ProtectedRoute element={<Dashboard />} />}
//           />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;
