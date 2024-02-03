import React from 'react';
import { Header, NavigationBar, About, Services, Team } from "./components"; 

function App() {
  return (
    <div className="App font-inter">
         <NavigationBar/>
         <div className="md:h-auto h-screen relative -mt-10">
             <Header />
         </div>
         <About />
         <Services />
         <Team />
    </div>
  );
}

export default App;
