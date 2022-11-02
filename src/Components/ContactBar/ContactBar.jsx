import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './style.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a
          href="https://github.com/arjunlaxane"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          {window.innerWidth > 300 ? (
            <GitHubIcon fontSize="large" />
          ) : (
            <GitHubIcon />
          )}
        </a>
        <a
          href="mailto:arjunlaxane@gmail.com"
          rel="noreferrer"
          className={styles.email}
        >
          {window.innerWidth > 300 ? (
            <MailOutlineIcon fontSize="large" />
          ) : (
            <MailOutlineIcon />
          )}
        </a>

        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;
