import { useForm } from "@formspree/react"

export default function Contact() {

  const [state, handleSubmit, reset] = useForm('https://formspree.io/f/xovkzvvq');
  if (state.succeeded) {
    return <div>Thank you for submitting</div>
  }

  return (
    <section id="contact">

      <div>
        <h2>Contact</h2>
        <p>Have I piqued your interest ?</p>
        <p>Let’s connect and create something great.</p>
      </div>

      <div>
        <p>Have I piqued your interest</p>
        <h2>Get In Touch</h2>
        <form autoComplete="off" onSubmit={handleSubmit} method="POST">
            <input type="text" name="name" id="name" placeholder="Your Name"/>
            <input type="text" name="company" id="company" placeholder="Company Name"/>
            <input type="email" name="email" id="email" placeholder="E-Mail"/>
            <input type="tel" name="phone" id="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
            <textarea name="message" id="message" placeholder="Message"></textarea>
            <button type="submit" disabled={state.submitting}>Send</button>
        </form>
      </div>

    </section>
  )
}
