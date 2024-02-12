import React from 'react';
import { Header,
         NavigationBar,
         About,
         Services,
         Team,
         Sponsors,
         Contacts,
         Footer
       } from "./components"; 

function App() {
  return (
    <div className="App overflow-hidden">
         <NavigationBar/>
         <Header />
         <About />
         <Services />
         <Team />
         <Sponsors />
         <Contacts />
         <Footer />
    </div>
  );
}

export default App;
