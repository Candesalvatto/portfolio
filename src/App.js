import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavegationBar3 } from './compon/NavegationBar3';
import { Banner3 } from './compon/Banner3';
import { AboutMe3 } from './compon/AboutMe3';
import { Contact3 } from './compon/Contact3';
import { WriteMe } from './compon/WriteMe';
import { MoreMe } from './compon/MoreMe';
import {Projects} from './compon/Projects';
import { AllProjects } from './compon/AllProjects';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PagenotFound } from './compon/PagenotFound';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
<NavegationBar3/>
<Routes>
<Route path="/" element={
            <>
              <Banner3 />
              <AboutMe3 />
              <Projects />
              <Contact3 />
            </>
          } />
          <Route path="/write-me" element={<WriteMe />} />
          <Route path="*" element={<PagenotFound />} />
          <Route path="/more-me" element={
            <>
            <MoreMe />
            <Contact3 />
            </>} />
          <Route path="/projects" element={<>
          <AllProjects/>
          <Contact3 />
          </>} />
</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;