import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

import { HashRouter as Router, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';

import {motion} from 'framer-motion';

const App = () => {
  return (
    <>
    <Router>
     <AuthProvider>
      
        <Header />
        <AnimRoutes />
      
       </AuthProvider>

       </Router>
   
    </>
  );
}

export default App;