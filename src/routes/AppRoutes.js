import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ejercicio1 from '../pages/ejercicio1.js';
import Ejercicio2 from '../pages/ejercicio2.js';
import Ejercicio3 from '../pages/ejercicio3.js';
import Ejercicio4 from '../pages/ejercicio4.js';
import Ejercicio5 from '../pages/ejercicio5.js';
import Home from '../pages/Home.js';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route path="/ejercicio2" element={<Ejercicio2 />} />
        <Route path="/ejercicio3" element={<Ejercicio3 />} />
        <Route path="/ejercicio4" element={<Ejercicio4 />} />
        <Route path="/ejercicio5" element={<Ejercicio5 />} />
      </Routes>
    </Router>
  );
  
};
 export default AppRoutes;
