import { useEffect, useState } from "react"


export default function Offer() {

  const [offdata, setOffdata] = useState([]);

  const skills = [
    { title: 'Information Technology', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempore doloribus quos aut voluptatum ullam sit, pariatur consequuntur debitis laboriosam!', points: [ 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.' ]},
    { title: 'Web Development', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempore doloribus quos aut voluptatum ullam sit, pariatur consequuntur debitis laboriosam!', points: [ 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.' ]},
    { title: 'Soft Skills', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tempore doloribus quos aut voluptatum ullam sit, pariatur consequuntur debitis laboriosam!', points: [ 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet.' ]}
  ];

  useEffect(() => {
    setOffdata(skills);
  }, []);


  return (
    <section className="offer">

      <div className="offer_intro">
        <p>Services</p>
        <p>What I Offer</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button>Get In Touch</button>
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
