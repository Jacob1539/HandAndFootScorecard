import '../App.css';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <ul className="unavbar">
      <li className="navbar"><NavLink to="/">Scorecard</NavLink></li>
      <li className="navbar"><NavLink to="/rules">Game Rules</NavLink></li>
      <li className="navbar"><NavLink to="/scoring">Scoring Rules</NavLink></li>
      <li className="navbar" style = {{float:'right'}}><NavLink to="/about">About</NavLink></li>
    </ul>
  )
}