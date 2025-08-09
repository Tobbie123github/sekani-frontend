import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact'; 
import Portfolio from '../pages/Portfolio';
import Login from '../pages/Login'; 
import Dashboard from '../pages/Dashboard';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import EditImage from '../pages/EditImage';
import AddImage from '../pages/AddImage';

const AnimRoutes = () => {
  const location = useLocation();

  return (
    <>
    
     
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditImage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addImage"
          element={
            <ProtectedRoute>
              <AddImage />
            </ProtectedRoute>
          }
        />
      </Routes>


      <AnimatePresence initial={true} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimRoutes;
