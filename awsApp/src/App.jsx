import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignInPage from "./pages/SignInPage";

function App() {
  const [isVisibleStart, setIsVisibleStart] = useState(true);
  const [isFadingOutStart, setIsFadingOutStart] = useState(false);
  const [showLoginInterface, setShowLoginInterface] = useState(false);

  const handleStartClick = () => {
    setIsFadingOutStart(true);
    setTimeout(() => {
      setIsVisibleStart(false);
      setShowLoginInterface(true);
    }, 500);
  };

  return (
    <Router>
      <div className="app-container">
        {isVisibleStart && (
          <div>
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        )}
        {isVisibleStart && (
          <h1 className={`fade-out ${isFadingOutStart ? "hidden" : ""}`}>
            Aws App
          </h1>
        )}
        <div className="card">
          {isVisibleStart && (
            <div className={`fade-out ${isFadingOutStart ? "hidden" : ""}`}>
              <button onClick={handleStartClick}>START</button>
              <p className="read-the-docs">
                Click <code>START</code> to view the login interface.
              </p>
            </div>
          )}

          {showLoginInterface && (
            <div
              className={`login-interface-container ${
                showLoginInterface ? "fade-in" : ""
              }`}
            >
              <LoginPage />
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
