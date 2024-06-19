import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <>   
   <Navbar title="Brook"/>
   <Banner 
        title1="Discover Your Next Read"    
        title2="Discover your Next Read"           
        subtitle="Explore Beyond: Discover New Reads"
        description="Step into uncharted literary territories and unlock the door to untold stories. Our book recommendation system guides you to new adventures, tailored to your preferences and curiosities."
      />
    </>
  );
}

export default App;
