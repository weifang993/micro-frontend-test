import './App.css';
import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
const Header = lazy(() => import('HeaderApp/Header'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="container">This is my home page</div>
    </div>
  );
}

export default App;
