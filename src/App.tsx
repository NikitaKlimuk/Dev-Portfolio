import { Routes, Route } from "react-router-dom";
import "./styles/main.scss";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/Projects";
import ContactsPage from "./pages/Contacts";

function App() {
  return (
    <section className="App">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
