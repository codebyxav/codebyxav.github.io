import { useEffect, useRef, useState } from 'react';
import portrait from '../../assets/thyrone.jpg';
import { adobe, office, network, configuration, linux, cli, hardware } from '../../assets/icons'; 

export default function Hero() {

  const [dskill, setDSkill] = useState([]);
  const [tskills, setTskills] = useState([]);
  const [devEl, setDevEl] = useState([]);
  const [itEl, setItEl] = useState([]);

  const devList = [
    { name: 'Adobe Creative Cloud', icon: null },
    { name: 'CSS', icon: null },
    { name: 'JavaScript', icon: null },
    { name: 'PHP', icon: null },
    { name: 'Python', icon: null },
    { name: 'Sass', icon: null },
    { name: 'Git / Version Control', icon: null },
    { name: 'ReactJs', icon: null },
    { name: 'MySQL', icon: null }
  ];

  const techList = [
    { name: 'Adobe Creative Cloud', icon: adobe },
    { name: 'Microsoft Office', icon: office },
    { name: 'Networking', icon: network },
    { name: 'OS Configuration', icon: configuration },
    { name: 'PC Hardware Installation', icon: hardware },
    { name: 'Linux', icon: linux },
    { name: 'Command Line Tools / Version Control', icon: cli }
  ];


  function devskill() {
    itEl.classList.toggle('skill_show');
    devEl.classList.toggle('skill_active');
    setTimeout(() => {
      itEl.classList.toggle('skill_active');
      devEl.classList.toggle('skill_show');
    }, 500);
  }

  function itskill() {
    devEl.classList.toggle('skill_show');
    itEl.classList.toggle('skill_active');
    setTimeout(() => {
      devEl.classList.toggle('skill_active');
      itEl.classList.toggle('skill_show');
    }, 500);
  }




  useEffect(() => {

    setDSkill(devList);
    setTskills(techList);

    setDevEl(document.querySelector('.dev'));
    setItEl(document.querySelector('.tech'));
  },[]);


  return (
    <section className="hero">




      <div className="hero__intro">

        <div>
          <h2>Portfolio</h2>

          <div><img src={portrait} alt="Portrait" /></div>
        </div>

        <div>
          <h3>Hi, I'm Lorem</h3>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, laudantium dolor, velit ipsam harum alias unde pariatur tempore aliquam commodi vero optio dolorum eveniet?</p>

          <button>Contact</button>
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
