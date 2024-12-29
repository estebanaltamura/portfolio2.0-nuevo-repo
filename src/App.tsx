import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Home from 'app/pages/home/page';
import ExperienceDetail from 'app/pages/experience-detail/[id]/ExperienceDetail';
import ProjectDetail from 'app/pages/project-detail/[id]/ProjectDetail';


function App() {
  return (

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <Home />
            }
          />
          <Route
            path="/experience-detail/:id"
            element={
              <ExperienceDetail />
            }
          />
          <Route
            path="/project-detail/:id"
            element={
              <ProjectDetail />
            }           
          />
        </Routes>
    
  );
}

export default App;
