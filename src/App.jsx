import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/frontpage/Navbar';
import Portfolio from './components/frontpage/Portfolio';
import EducationSection from './components/frontpage/EducationSection'; 
import SkillsSection from './components/frontpage/SkillsSection';
import ContactSection from './components/frontpage/ContactSection';
import ProjectsPage from './components/projectpage/ProjectsPage';
import ProjectDetail from './components/projectpage/ProjectDetail';

function FrontPage() {
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
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App