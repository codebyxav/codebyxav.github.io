import { useEffect, useState } from 'react';
import { future, working } from '../../assets/icons';
import dark from '../../assets/darkgray.png';

export default function Projects() {

  const [proj, setProj] = useState([]);

  const cards = [
    { title: '', status: [working, 'Project In Progress'], bgimage: dark},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark},
    { title: '', status: [future, 'Project Not Started'], bgimage: dark},
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
                  <li key={index} data-after-text={value.title} ><span></span><img src={value.bgimage} alt="" /><div>{value.status[0]}<p>{value.status[1]}</p></div></li>
                )
              })}

            </ul>

        </div>

    </section>
  )
}
