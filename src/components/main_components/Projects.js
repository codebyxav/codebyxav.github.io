import { useEffect, useState } from 'react';
import dark from '../../assets/dark.jpg';

export default function Projects() {

  const [proj, setProj] = useState([]);

  const cards = [
    { title: 'Title', techs: ['', '', ''], icon: '', bgimage: dark},
    { title: 'Title', techs: ['', '', ''], icon: '', bgimage: dark},
    { title: 'Title', techs: ['', '', ''], icon: '', bgimage: dark},
    { title: 'Title', techs: ['', '', ''], icon: '', bgimage: dark},
    { title: 'Title', techs: ['', '', ''], icon: '', bgimage: dark},
    { title: 'Title', techs: ['', '', ''], icon: '', bgimage: dark},
    { title: 'Title', techs: ['', '', ''], icon: '', bgimage: dark},
    { title: 'Title', techs: ['', '', ''], icon: '', bgimage: dark},
  ];

  useEffect(() => {
    setProj(cards);
  }, []);

  return (
    <section id="projects">

        <div>

          <h2>My Work</h2>

          <p>Lorem ipsum dolor sit amet.</p>

        </div>

        <div className="projects_tiles">

            <ul>

              { proj.map((value, index) => {
                return (
                  <li key={index} data-after-text={value.title + index} ><span></span><img src={value.bgimage} alt="" /></li>
                )
              })}

            </ul>

        </div>

    </section>
  )
}
