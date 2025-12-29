import { useEffect, useState } from 'react';
import { future, working } from '../../assets/icons';
import dark from '../../assets/darkgray.png';
import particle from '../../assets/project_images/particle.gif';

export default function Projects() {

  const [proj, setProj] = useState([]);

  const cards = [
    { title: 'Text Particles App', status: [working, 'Project In Progress'], bgimage: particle, url: 'https://codebyxav.github.io/TextParticles'},
    { title: '', status: [working, 'Project In Progress'], bgimage: dark, url: ''},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark, url: ''},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark, url: ''},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark, url: ''},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark, url: ''},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark, url: ''},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark, url: ''},
  ];


  useEffect(() => {
    setProj(cards);
  }, []);

  return (
    <section id="projects">

        <div>

          <h2>My Work</h2>

          <p>Showcasing the work that shaped my skills.</p>

        </div>

        <div className="projects_tiles">

            <ul>

              { proj.map((value, index) => {
                return (
                  <li key={index} data-after-text={value.title} ><img src={value.bgimage} alt="" /><a href={value.url} target='_blank'></a><div>{value.status[0]}<p>{value.status[1]}</p></div></li>
                )
              })}

            </ul>

        </div>

    </section>
  )
}
