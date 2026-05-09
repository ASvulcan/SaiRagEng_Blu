import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Deliverables } from "@/components/sections/Deliverables";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-[#00AEEF] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Deliverables />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
