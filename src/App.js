import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>HALLO! LOREM IPSUM!</h1>
      </header>
      <main>
        <nav className="button-container">
          <button className="button" id="button-1">
            TEST 1
          </button>
          <button className="button" id="button-2">
            TEST 2
          </button>
          <button className="button" id="button-3">
            TEST 3
          </button>
        </nav>
        <section className="main-container"></section>
        <aside></aside>
      </main>
      <footer>
        <br />
        &copy; 2024 Petrosilius Zwackelmann. Alle Rechte vorbehalten.
        <br />
      </footer>
    </div>
  );
}

export default App;
