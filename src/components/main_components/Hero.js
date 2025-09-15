import { useEffect, useState } from 'react';
import portrait from '../../assets/thyrone.jpg';
import { adobe, office, network, configuration, linux, cli, hardware } from '../../assets/icons'; 

export default function Hero() {

  const [skill, setSkill] = useState([]);
  const [tskills, setTskills] = useState([]);

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



  

  function skillSwap() {
    skill.classList.toggle('swap');
  }





  useEffect(() => {
    setSkill(document.querySelector('.skills_toggle > div'));
    setTskills(techList);
  },[]);


  return (
    <section className="hero">




      <div className="hero__intro">

        <h2>Portfolio</h2>

        <div><img src={portrait} alt="Portrait" /></div>

        <h3>Hi, I'm Lorem</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, laudantium dolor, velit ipsam harum alias unde pariatur tempore aliquam commodi vero optio dolorum eveniet?</p>

        <button>Contact</button>

      </div>



















      <div className='skills'>

        <div className='skills_toggle'>

          <div onClick={skillSwap} >
            <span></span>
            <p>Skills</p>
            <p>Tools</p>
          </div>

        </div>

        <div className='skills_list'>

          <div className='tech'>
            <ul>
              { tskills.map((e, index) => {
                  return (
                    <li key={index} className='tech_skill'>   <span>{e.icon}</span>    {`${e.name}`}</li>
                  )
                })
              }
            </ul>
          </div>

          <div className='dev'></div>

        </div>


      </div>

    </section>
  )
}
