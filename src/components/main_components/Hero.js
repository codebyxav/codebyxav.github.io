import { useEffect, useRef, useState } from 'react';
import portrait from '../../assets/thyrone.jpg';
import { adobe, office, network, configuration, linux, cli, hardware, css3, html5, jscript, php, pthon3, sass, git, reactjs, mysql, actived, security, routing } from '../../assets/icons'; 

export default function Hero() {

  const [dskill, setDSkill] = useState([]);
  const [tskills, setTskills] = useState([]);
  const [devEl, setDevEl] = useState([]);
  const [itEl, setItEl] = useState([]);

  const devList = [
    { name: 'Adobe Creative Cloud', icon: adobe },
    { name: 'HTML', icon: html5 },
    { name: 'CSS', icon: css3 },
    { name: 'JavaScript', icon: jscript },
    { name: 'PHP', icon: php },
    { name: 'Python', icon: pthon3 },
    { name: 'Sass', icon: sass },
    { name: 'Git / Version Control', icon: git },
    { name: 'ReactJs', icon: reactjs },
    { name: 'MySQL', icon: mysql }
  ];

  const techList = [
    { name: 'Active Directory', icon: actived },
    { name: 'Data Security', icon: security },
    { name: 'Networking', icon: network },
    { name: 'OS Configuration', icon: configuration },
    { name: 'PC Hardware Installation', icon: hardware },
    { name: 'Linux', icon: linux },
    { name: 'Command Line Tools', icon: cli },
    { name: 'Routing & Switching', icon: routing }
  ];


  function devskill() {

    if (devEl.classList.contains('skill_active')) {
      //
    } else {
      itEl.classList.toggle('skill_show');
      devEl.classList.toggle('skill_active');

      setTimeout(() => {
        itEl.classList.toggle('skill_active');
      }, 300);

      setTimeout(() => {
        devEl.classList.toggle('skill_show');
      }, 500);
    }

  }

  function itskill() {

    if (itEl.classList.contains('skill_active')) {
      //
    } else {
      devEl.classList.toggle('skill_show');

      setTimeout(() => {
        itEl.classList.toggle('skill_active');
        devEl.classList.toggle('skill_active');
      }, 300);

      setTimeout(() => {
        itEl.classList.toggle('skill_show');
      }, 500);
    }

  }




  useEffect(() => {

    setDSkill(devList);
    setTskills(techList);

    setDevEl(document.querySelector('.dev'));
    setItEl(document.querySelector('.tech'));
  },[]);


  return (
    <section id="hero">




      <div className="hero__intro">

        <div>
          <h2>Portfolio</h2>

          <div><img src={portrait} alt="Portrait" /></div>
        </div>

        <div>
          <h3>Hi, I'm Xavier</h3>

          <p>Skilled in both web development and IT, I create efficient, user-focused solutions while keeping systems running smoothly. I’m passionate about technology, quick to learn new tools, and always ready to take on fresh challenges.</p>

          <button><a href='#contact'>Contact</a></button>
        </div>

      </div>



















      <div className='skills'>

        <div className='skills_toggle'>

          <div>

            <button onClick={itskill}>IT Skills</button>

            <button onClick={devskill}>Dev Skills</button>

          </div>

        </div>

        <div className='skills_list'>

          <div className='tech skill_active skill_show'>
            <ul>
              { tskills.map((e, index) => {
                  return (
                    <li key={index} className='tech_skill'>   <span>{e.icon}</span>    {`${e.name}`}</li>
                  )
                })
              }
            </ul>
          </div>

          <div className='dev'>
            <ul>
              { dskill.map((e, index) => {
                  return (
                    <li key={index} className='tech_skill'>   <span>{e.icon}</span>    {`${e.name}`}</li>
                  )
                })
              }
            </ul>
          </div>

        </div>


      </div>

    </section>
  )
}
