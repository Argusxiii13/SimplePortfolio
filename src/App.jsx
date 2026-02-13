import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/frontpage/Navbar';
import Portfolio from './components/frontpage/Portfolio';
import EducationSection from './components/frontpage/EducationSection'; 
import SkillsSection from './components/frontpage/SkillsSection';
import ContactSection from './components/frontpage/ContactSection';
import Footer from './components/Footer';
import ProjectsPage from './components/projectpage/ProjectsPage';
import ProjectDetail from './components/projectpage/ProjectDetail';

function FrontPage() {
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);

  return (
    <>
      <Navbar heroCtaVisible={heroCtaVisible} />
      <div id="home">
        <Portfolio onCtaVisibilityChange={setHeroCtaVisible} />
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
      <Footer />
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