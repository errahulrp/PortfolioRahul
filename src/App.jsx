import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import MainHome from './components/MainHome';
import Projects from './pages/ProjectsMain';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHome />} />
          <Route path='/aboutMe' element={<AboutMe />} />
          <Route path='/projectsMain' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
