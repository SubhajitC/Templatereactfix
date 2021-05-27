import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Work from './pages/Work';
import WorkSingle from './pages/WorkSingle';





function App() {
  return (
     <div> 
        <Home/>
        <Contact/>
      {/* <About/> */}
        <Pricing/>
        <Work/>
        {/* <WorkSingle/> */}

       
    </div>
  );
}

export default App;
