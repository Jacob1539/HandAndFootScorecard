import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage'
import Rules from './pages/Rules'
import Scoring from './pages/Scoring'
import About from './pages/About'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/scoring" element={<Scoring/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}