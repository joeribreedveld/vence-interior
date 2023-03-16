// Imports
import { type NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "~/components/Footer/Footer";

// Functions
const Home: NextPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

// Exports
export default Home;
