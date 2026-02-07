import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import EducationSection from './components/EducationSection'; 
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Portfolio />
      </div>
      <div id="education">
        <EducationSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </>
  )
}

export default App