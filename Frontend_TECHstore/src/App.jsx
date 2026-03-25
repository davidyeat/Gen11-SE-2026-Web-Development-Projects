import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const [, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />
      <main className="pt-16">
        {/* Content will go here based on the page state */}
        <Home />
      </main>
    </>
  );
}

export default App;
