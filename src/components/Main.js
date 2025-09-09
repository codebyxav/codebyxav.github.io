
import Hero from "./main_components/Hero";
import Projects from "./main_components/Projects";
import Featured from "./main_components/Featured";

export default function Main() {
  return (
    <main>
      <div className="main_container">

        <Hero />

        <Projects />

        <Featured />

      </div>
    </main>
  )
}
