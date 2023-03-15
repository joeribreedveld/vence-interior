// Imports
import { type NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

// Functions
const Home: NextPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
};

// Exports
export default Home;
