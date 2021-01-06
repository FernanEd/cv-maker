import React from 'react';
import EducationSection from './components/EducationSection';
import PersonalSection from './components/PersonalSection';
import WorkSection from './components/WorkSection';

function App() {
  return (
    <>
      <div id="content">
        <PersonalSection />
        <EducationSection />
        <WorkSection />
      </div>
      <button onClick={window.print} id="print-btn" className="btn btn-primary">
        Print
      </button>
    </>
  );
}

export default App;
