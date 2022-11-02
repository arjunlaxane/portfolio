import Heading from './../../Components/Heading/Heading';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import constant from '../../constant.json';
import styles from './style.module.css';

function Work() {
  return (
    <section id="work">
      <Heading heading="Projects I’ve Built" />
      <div className={styles.container}>
        {constant.projects.map((project, index) => (
          <div className={styles.project}>
            <div className={styles.left}>
              <a href={project.link} target="__blank">
                <img
                  src={project.image}
                  className={styles.img}
                  alt="project_img"
                />
              </a>
            </div>
            <div className={styles.right}>
              <a href={project.link} className={styles.heading}>
                {project.title}
              </a>
              <p className={styles.desc}>{project.desc}</p>
              <div className={styles.skill_container}>
                {project.skills.map(skill => (
                  <p>{skill}</p>
                ))}
              </div>
              <div>
                <a
                  href="https://github.com/arjunlaxane/Marketcartbackend"
                  className={styles.link}
                  rel="noreferrer"
                  target="_blank"
                  // sx={{ cursor: 'pointer' }}
                >
                  {window.innerWidth < 300 ? (
                    <GitHubIcon fontSize="large" />
                  ) : (
                    <GitHubIcon />
                  )}
                </a>
                <a
                  href="https://marketecommerceapp.herokuapp.com/"
                  rel="noreferrer"
                  className={styles.link}
                  target="_blank"
                  // sx={{ cursor: 'pointer' }}
                >
                  {window.innerWidth < 300 ? (
                    <OpenInNewIcon fontSize="large" />
                  ) : (
                    <OpenInNewIcon />
                  )}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
