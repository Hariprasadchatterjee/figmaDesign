import Footer from "./layout/Footer";
import Header from "./layout/Navbar";
import FeaturesSection from "./pages/FeaturesSection";
import HeroSection from "./pages/HeroSection";
import ServicesSection from "./pages/ServicesSection";
import TestimonialsSection from "./pages/TestimonialsSection";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
