import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Events from "./Events";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;