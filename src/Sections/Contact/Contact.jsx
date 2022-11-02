import Heading from '../../Components/Heading/Heading';
import styles from './style.module.css';

function Contact() {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.heading_1}>
        <Heading heading="Hire me" />
      </div>

      <h1 className={styles.heading_2}>Get In Touch</h1>
      <p className={styles.desc}>
        Feel free to get in touch with me. I am looking for opportunities to be
        able to grow long as a UI/UX Developer.
      </p>
      <a href="mailto:arjunlaxane@gmail.com" rel="noreferrer" target="_blank">
        <button className={styles.btn}>Let's Chat</button>
      </a>
    </section>
  );
}

export default Contact;
