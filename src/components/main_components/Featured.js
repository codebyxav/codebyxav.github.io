import { useEffect, useState } from 'react';
import gray from '../../assets/grey.jpg';

export default function Featured() {

    const [feature, setFeature] = useState([]);

    const svg_desktop = (
        <svg width="800px" height="800px" viewBox="-0.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssketch="http://www.bohemiancoding.com/sketch/ns">
            
            <title>desktop</title>
            <desc>Created with Sketch Beta.</desc>
            <defs>

        </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchtype="MSPage">
                <g id="Icon-Set-Filled" sketchtype="MSLayerGroup" transform="translate(-570.000000, -465.000000)" fill="#000000">
                    <path d="M597,465 L574,465 C571.791,465 570,466.791 570,469 L570,483 L601,483 L601,469 C601,466.791 599.209,465 597,465 L597,465 Z M570,487 C570,489.209 571.791,491 574,491 L597,491 C599.209,491 601,489.209 601,487 L601,485 L570,485 L570,487 L570,487 Z M592,495 L590,495 L590,493 L582,493 L582,495 L580,495 C579.447,495 579,495.448 579,496 C579,496.553 579.447,497 580,497 L592,497 C592.553,497 593,496.553 593,496 C593,495.448 592.553,495 592,495 L592,495 Z" id="desktop" sketchtype="MSShapeGroup">

        </path>
                </g>
            </g>
        </svg>
    );

    const ft_projects = [
        { title: 'Project #', description: 'Lorem ipsum dolor', icon: svg_desktop, tags: ['Python', 'CSS', 'JavaScript']},
        { title: 'Project #', description: 'Lorem ipsum dolor', icon: svg_desktop, tags: ['Python', 'JavaScript']},
        { title: 'Project #', description: 'Lorem ipsum dolor', icon: svg_desktop, tags: ['Python', 'CSS']}
    ];

    useEffect(() => {
        setFeature(ft_projects);
    }, []);



  return (
    <section id='featured'>


        <div className='featured_intro'>
            <h2>Featured Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, mollitia!</p>
        </div>




        <div className='featured_projects'>
            <ul>

                { feature.map((x, index) => {
                    return (
                        <li key={index} className='ft_project'>
                            <div className='ft_image'><img src={gray} alt="" /></div>
                            <div className='ft_info'>
                                <div><span>{x.icon}</span> <h3>{x.title}</h3></div>
                                <div>
                                    <p>{x.description}</p>
                                    {x.tags.map((i, index) => {
                                        return (
                                            <span key={index}>{i}</span>
                                        )
                                    })}
                                </div>
                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>

    </section>
  )
}
