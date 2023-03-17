// Imports
import { type NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "~/components/Footer/Footer";
import Projects from "~/components/Projects/Projects";
import Trending from "~/components/Trending/Trending";

// Functions
const Home: NextPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="mb-24 flex min-h-screen flex-col gap-24">
        <Hero />
        <Projects />
        <Trending />
      </main>
      <Footer />
    </>
  );
};

// Exports
export default Home;
