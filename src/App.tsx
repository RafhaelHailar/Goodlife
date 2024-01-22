import React from 'react';
import { Header, NavigationBar } from "./components"; 

function App() {
  return (
    <div className="App font-inter">
         <NavigationBar/>
         <div className="md:h-auto h-screen relative">
             <Header />
         </div>
    </div>
  );
}

export default App;
