import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/:nasaId" element={<ShowPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
