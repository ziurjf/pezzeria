
import { useState } from 'react';
import './App.css';
import LoginPage from './components/Acceso';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RegisterPage from './components/Registro';

function App() {
  const [view, setView] = useState("home");

  const renderView = () => {
    switch (view) {
      case "login":
        return <LoginPage />;
      case "register":
        return <RegisterPage />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar setView={setView} />
      {renderView()}
      <Footer />
    </>
  );
}

export default App;
