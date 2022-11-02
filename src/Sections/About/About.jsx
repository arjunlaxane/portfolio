import Heading from '../../Components/Heading/Heading';
import styles from './style.module.css';

function About() {
  return (
    <section id="about">
      <Heading heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
<<<<<<< HEAD
            A passionate web developer and an excellent team player with
            knowledge in designing new features from ideation to production,
            implementation of wireframes and design flows into high performance
            consideration the user experience while writing reusable and
            efficient code with combination of good design, technology and
            innovation in all my projects.
          </p>
          software application and browser compatibility issues. I take into
          <p className={styles.desc}></p>
=======
      A passionate web developer and an excellent team player with knowledge in designing new features from ideation to production, implementation of wireframes and design flows into high performance software application and browser compatibility issues. I take into consideration the user experience while writing reusable and efficient code with combination of good design, technology and innovation in all my projects.
          </p>

>>>>>>> 122730f6333534fc72a0f4300e338ee3e611c7fd
        </div>
        <div className={styles.right}>
          <img
            src="./images/profile.jpg"
            alt="profile"
            className={styles.profile_img}
          />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
