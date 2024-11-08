import './App.css';
import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
const Header = lazy(() => import('HeaderApp/Header'));
const UserReg = lazy(() => import('UserRegApp/UserReg'));

function App() {
  return (
    <div className="App">

      <div className="container">This is my home page</div>
      <Suspense fallback={<div>Loading remote component UserReg...</div>}>
        <UserReg />        
      </Suspense>

      {/* <Suspense fallback={<div>Loading remote component Header...</div>}>
        <Header />
      </Suspense> */}
      
    </div>
  );
}

export default App;
