import './App.css';
import ContactBar from './Components/ContactBar/ContactBar';
import Navbar from './Components/Navbar/Navbar';
import About from './Sections/About/About';
import Contact from './Sections/Contact/Contact';
import Home from './Sections/Home/Home';
import Work from './Sections/Work/Work';
import Skill from './Sections/Skill/Skill';
function App() {
  return (
    <>
      <Navbar />
      <div className="app_section_container">
        <Home />
        <About />
        <Skill />
        <Work />
        <Contact />
      </div>
      {/* <ContactBar /> */}
    </>
  );
}

export default App;
