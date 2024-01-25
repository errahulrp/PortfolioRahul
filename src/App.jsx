import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/Aboutme';
import MainHome from './components/mainHome';
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
