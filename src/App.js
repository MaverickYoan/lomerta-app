import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Accueil from "lomerta-app/src/Accueil.js";
import Album from "./pages/Album";
import Apropos from "./pages/Apropos";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-bg">
        <header>
          <span className="logo">L'OMERTA</span>
          <nav>
            <ul>
              <li>
                <NavLink to="/" end>Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/album">Album</NavLink>
              </li>
              <li>
                <NavLink to="/apropos">À propos</NavLink>
              </li>
            </ul>
          </nav>
          <span className="user-icon">&#128100;</span>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/album" element={<Album />} />
            <Route path="/apropos" element={<Apropos />} />
          </Routes>
        </main>
        <footer>
          <nav className="bottom-nav">
            <NavLink to="/" end>
              <span role="img" aria-label="Accueil">🏠</span>
              <div>Accueil</div>
            </NavLink>
            <NavLink to="/album">
              <span role="img" aria-label="Album">🎵</span>
              <div>Album</div>
            </NavLink>
            <NavLink to="/apropos">
              <span role="img" aria-label="A propos">☰</span>
              <div>À propos</div>
            </NavLink>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
