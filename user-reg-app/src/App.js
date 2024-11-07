import UserAppPage from "./UserApplications";
import AppReceivedPage from "./ApplicationReceived";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <BrowserRouter basename="/user-reg-app"> */}
        <Routes>
          <Route index path="/" element={
              <UserAppPage />
          } />
          <Route path="/app-received" element={
              <AppReceivedPage />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
