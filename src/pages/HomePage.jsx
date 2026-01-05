import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const HomePage = () => {
  return (
    <>
      <NavBar id="home"/>
      <main>
        <Hero />
        <Menu />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
