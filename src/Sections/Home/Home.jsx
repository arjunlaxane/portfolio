import styles from './style.module.css';
import Typed from 'react-typed';
import { Typography } from '@mui/material';

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hi, I am a</p>

      <Typography variant="h1">
        <Typed
          strings={[
            'Frontend Developer',
            'UI/UX Developer',
            'Backend Developer',
            'MERN Stack Developer',
            'Mobile Developer',
            'Full Stack Web Developer',
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input type="text" className={styles.heading_1} />
        </Typed>
      </Typography>

      <p className={styles.desc}>
        I am a passionate MERN Stack developer. And building awesome projects is
        my hobby.
      </p>
      <a href="#work">
        <button className={styles.btn}>Check out my work !</button>
      </a>
    </section>
  );
}

export default Home;
