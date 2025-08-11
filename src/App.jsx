import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
    <Router>
      <AuthProvider>
        <Header />
        <AnimRoutes />
         <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      </AuthProvider>
    </Router>
   
    </>
  );
}

export default App;