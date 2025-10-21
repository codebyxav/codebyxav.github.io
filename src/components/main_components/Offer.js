import { useEffect, useState } from "react"


export default function Offer() {

  const [offdata, setOffdata] = useState([]);

  const skills = [
    { title: 'Information Technology', description: 'Skilled in the core fundamentals of Information Technology, with hands-on experience across essential IT systems, infrastructure, and support operations.', points: [ 'Active Directory', 'Networking', 'OS Installation' ]},
    { title: 'Web Development', description: 'Experienced in building functional and responsive websites using core web technologies, with a solid understanding of both front-end and back-end development.', points: [ 'HTML, CSS, JavaScript', 'Python', 'PHP' ]},
    { title: 'Soft Skills', description: 'Strong interpersonal and communication abilities with essential workplace skills that support teamwork, adaptability, and professional growth.', points: [ 'Communication', 'Attention to detail', 'Adaptability' ]}
  ];

  useEffect(() => {
    setOffdata(skills);
  }, []);


  return (
    <section id="offer">

      <div className="offer_intro">
        <p>Services</p>
        <p>What I Offer</p>
        <p>What I can do for your team.</p>
        <button><a href="#contact">Get In Touch</a></button>
      </div>

      <div className="offer_skill">


        { offdata.map((x, index) => {
          return (
            <div key={index}>
              <p>{ (index + 1).toString().padStart(2, '0') }</p>
              <p>{x.title}</p>
              <p>{x.description}</p>
              <p>Skills</p>
              <ul>
                {x.points.map((i, index) => {
                  return ( <li key={index}>{i}</li> )
                })}
              </ul>
            </div>
          )
        }) }

      </div>

    </section>
  )
}
