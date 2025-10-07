import { useEffect, useState } from "react";

export default function SiteNavigation() {


  const [hamburg, setHamburg] = useState([]);
  const [menu, setMenu] = useState([]);
  const [body, setBody] = useState([]);

  useEffect(() => {
    setHamburg(document.querySelector('.hamburger'));
    setMenu(document.querySelector('aside'));
    setBody(document.querySelector('body'));
  }, []);


  function linkClick() {
    hamburg.classList.toggle('twist');
    menu.classList.toggle('visible');
    body.classList.toggle('no-scroll');
    setTimeout(() => {
        hamburg.classList.toggle('clicked');
        menu.classList.toggle('open');
    }, 200)
  }


  return (
    <aside>
        <nav>
            <ul>
                <li><a href="#hero" onClick={linkClick}>Home</a></li>
                <li><a href="#projects" onClick={linkClick}>Projects</a></li>
                <li><a href="#featured" onClick={linkClick}>Featured Projects</a></li>
                <li><a href="#offer" onClick={linkClick}>Skills</a></li>
                <li><a href="#contact" onClick={linkClick}>Contact</a></li>
            </ul>
        </nav>
    </aside>
  )
}
