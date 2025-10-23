import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <ProjectSection />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
