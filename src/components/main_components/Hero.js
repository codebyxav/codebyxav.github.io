import { useEffect, useState } from 'react';
import portrait from '../../assets/thyrone.jpg';

export default function Hero() {

  const [skill, setSkill] = useState([]);

  useEffect(() => {
    setSkill(document.querySelector('.skills__toggle > div'));
  },[]);
  

  function skillSwap() {
    skill.classList.toggle('swap');
  }


  return (
    <div className="hero">




      <div className="hero__intro">

        <h2>Portfolio</h2>

        <div><img src={portrait} alt="Portrait" /></div>

        <h3>Hi, I'm Lorem</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, laudantium dolor, velit ipsam harum alias unde pariatur tempore aliquam commodi vero optio dolorum eveniet?</p>

        <button>Contact</button>

      </div>






      <div className='skills'>

        <div className='skills__toggle'>

          <div onClick={skillSwap} >
            <span></span>
            <p>Skills</p>
            <p>Tools</p>
          </div>

        </div>

        <div className='skills__list'>

        </div>


      </div>

    </div>
  )
}
