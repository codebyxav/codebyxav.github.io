
import Hero from "./main_components/Hero";
import Projects from "./main_components/Projects";
import Featured from "./main_components/Featured";
import Offer from "./main_components/Offer";
import Contact from "./main_components/Contact";
import Footer from "./Footer";
import DeskMenu from "./DeskMenu";

export default function Main() {
  return (
    <main>
      <div className="main_container">

        <Hero />

        <Projects />

        <Featured />

        <hr></hr>

        <Offer />

        <hr></hr>

        <Contact />

        <Footer />

        <DeskMenu />

      </div>
    </main>
  )
}
