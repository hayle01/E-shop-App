import React from 'react'
import './index.css'
import { Outlet } from 'react-router';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <main className="max-w-4xl mx-auto pt-16 my-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
