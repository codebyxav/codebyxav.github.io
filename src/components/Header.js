import { useEffect, useState } from "react";

export default function Header() {

    const [hamburg, setHamburg] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        setHamburg(document.querySelector('.hamburger'));
        setMenu(document.querySelector('aside'));
    }, []);

    function menuClick() {
        if (hamburg.classList.contains('clicked')) {
            hamburg.classList.toggle('twist');
            menu.classList.toggle('visible');
            setTimeout(() => {
                hamburg.classList.toggle('clicked');
                menu.classList.toggle('open');
            }, 200)
        } else {
            hamburg.classList.toggle('clicked');
            menu.classList.toggle('open');
            setTimeout(() => {
                hamburg.classList.toggle('twist');
                menu.classList.toggle('visible');
            }, 200)
        }
    }

  return (
    <header>

        <div className="home">
            <div className="logo">
                <h1>XM</h1>
            </div>
        </div>

        <div className="menu">

            <div className="hamburger" onClick={menuClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>

    </header>
  )
}
