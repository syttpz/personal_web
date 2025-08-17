import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Experience from './pages/Experience'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />}/>
        <Route path='/experience' element={<Experience />}/>
      </Routes>
    </div>
  )
}
