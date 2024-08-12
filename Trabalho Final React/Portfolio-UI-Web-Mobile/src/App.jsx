import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Work from './Pages/Work/Work';
import Header from './Components/Header/Header'; 
import Footer from './Components/Footer/Footer'; 

function App() {
  return (
    <BrowserRouter>
        
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="work" element={<Work />} />
          </Routes>
          <Footer />
        
    </BrowserRouter>
  );
}

export default App;