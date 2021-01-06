import React from 'react';
import Copyright from './components/Copyright';
import EducationSection from './components/EducationSection';
import PersonalSection from './components/PersonalSection';
import WorkSection from './components/WorkSection';

function App() {
  return (
    <div id="contents">
      <PersonalSection />
      <EducationSection />
      <WorkSection />
    </div>
  );
}

export default App;
