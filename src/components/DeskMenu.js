import { useEffect, useState } from "react"

export default function DeskMenu() {

    const [hvMenu, setHvMenu] = useState([]);
    const [hlScroll, setHlScroll] = useState([]);

    function msover() {
        hvMenu.classList.add('active');
        setTimeout(() => {
            hvMenu.classList.add('show');
        }, 100);
    }

    function msleave() {
        hvMenu.classList.remove('show');
        setTimeout(() => {
            hvMenu.classList.remove('active');
        }, 100);
    }

    // hlScroll.addEventListener('mouseover', () => {
    //     hvMenu.classList.toggle('active');
    //     setTimeout(() => {
    //         hvMenu.classList.toggle('show');
    //     }, 200);
    // });

    useEffect(() => {
        setHvMenu(document.querySelector('.hover_menu'));
        setHlScroll(document.querySelector('.highlight_scroll'));
    }, []);


  return (
    <div className="deskmenu">

        <ul className="highlight_scroll" onMouseEnter={msover}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <div className="hover_menu" onMouseLeave={msleave}>
            <p>{`Home (Skills)`}</p>
            <p>Projects</p>
            <p>Featured</p>
            <p>What I Offer</p>
            <p>Contact</p>
        </div>

    </div>
  )
}
