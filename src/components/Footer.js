import { email, github, instagram, linkedin } from "../assets/icons"

export default function Footer() {

  return (
    <footer>

        <div className="footer_socials">
            <ul>
                <li className="email"><span>{email}</span></li>
                <li className="github"><span>{github}</span></li>
                <li className="instagram"><span>{instagram}</span></li>
                <li className="linkedin"><span>{linkedin}</span></li>
            </ul>
        </div>

        <div></div>

    </footer>
  )
}
