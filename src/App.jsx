import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';

import {motion} from 'framer-motion';

const App = () => {
  return (
    <>
     <AuthProvider>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
       </AuthProvider>
   
    </>
  );
}

export default App;