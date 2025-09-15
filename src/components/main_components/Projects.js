import dark from '../../assets/dark.jpg';

export default function Projects() {
  return (
    <section className="projects">

        <h2>My Work</h2>

        <p>Lorem ipsum dolor sit amet.</p>

        <div className="projects_tiles">

            <ul>
                <li><span></span><img src={dark} alt="" /></li>
                <li><span></span><img src={dark} alt="" /></li>
                <li><span></span><img src={dark} alt="" /></li>
                <li><span></span><img src={dark} alt="" /></li>
                <li><span></span><img src={dark} alt="" /></li>
                <li><span></span><img src={dark} alt="" /></li>
                <li><span></span><img src={dark} alt="" /></li>
            </ul>

        </div>

    </section>
  )
}
