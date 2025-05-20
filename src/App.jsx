import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import Login from './components/Login';
import CheckMaterial from './components/CheckMaterial';
import UploadMaterial from './components/UploadMaterial';
import Payment from './components/Payment';
import Contact from './components/Contact';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [materials, setMaterials] = useState([
    { title: 'Mathematics Notes', fileName: 'math_notes.pdf' },
    { title: 'Physics Assignment', fileName: 'physics_assignment.docx' },
    { title: 'Chemistry Lab Manual', fileName: 'chem_lab_manual.pdf' }
  ]);

  return (
    <Router>
      <NavBar/>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<h2 className="mt-4">Welcome to Study Circle</h2>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/materials" element={<CheckMaterial materials={materials} />} />
          <Route path="/upload" element={<UploadMaterial />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

     <Footer/>
    </Router>
    
  );
}

export default App;
