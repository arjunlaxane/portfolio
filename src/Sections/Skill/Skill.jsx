import Heading from '../../Components/Heading/Heading';
import styles from './style.module.css';
import constant from '../../constant.json';
function About() {
  return (
    <section id="skills">
      <Heading heading="Skills" />
      <div className={styles.container}>
        {constant.Skills.map((lang, index) => (
          <div className={styles.sub_container} key={index}>
            {/* <div> */}
            <p className={styles.lang_text}>{lang.language}</p>
            {/* </div> */}
            <div>
              <img
                src={lang.logo}
                alt={lang.language}
                className={styles.lang_img}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
