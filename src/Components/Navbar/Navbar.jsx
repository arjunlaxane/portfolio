import styles from './style.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_left}>
        <a href="#home">Arjun Dilip Laxane</a>
        <a
          href="https://github.com/arjunlaxane"
          target="_blank"
          rel="noreferrer"
          className={styles.git}
        >
          <GitHubIcon />
        </a>
      </div>
      <div className={styles.nav_right}>
        <a href="#about" className={styles.nav_link}>
          About
        </a>
        <a href="#skills" className={styles.nav_link}>
          Skills
        </a>
        <a href="#work" className={styles.nav_link}>
          Work
        </a>
        <a href="#contact" className={styles.nav_link}>
          Contact
        </a>
        <a
          href="https://drive.google.com/drive/folders/1lv3wkYAaSiFXUMo7ZgcyzARZ0EcGYXaq"
          target="_blank"
          rel="noreferrer"
          className={styles.nav_link}
        >
          <button className={styles.nav_resume_btn}>Resume</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
