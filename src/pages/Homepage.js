import '../App.css';
import { useState, useRef, useEffect } from 'react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

export function TeamName({team, color, handleColorChange}) {
  const nameRef = useRef('');
  const colorRef = useRef('');
  const teamVarName = 'name' + team;
  const colorVarName = 'color' + team;

  useEffect(() => {
    const savedName = localStorage.getItem(teamVarName);
    const savedColor = localStorage.getItem(colorVarName);
    if (savedName) {
      nameRef.current.value = JSON.parse(savedName);
    }
    if (savedColor) {
      colorRef.current.value = JSON.parse(savedColor);
      handleColorChange(team, colorRef.current.value);
    }
    //eslint-disable-next-line
  }, [teamVarName, colorVarName, team]);

  useEffect(() => {
    if (nameRef !== '') {
      localStorage.setItem(teamVarName, JSON.stringify(nameRef.current.value));
    }
    localStorage.setItem(colorVarName, JSON.stringify(colorRef.current.value));
  }, [nameRef.current.value, colorRef.current.value, teamVarName, colorVarName]);

  return (
    <form>
      <input type ="text" name="tName" placeholder="Team Name" className="tName" style={{color}} ref={nameRef}></input>
      <input type ="color" value={color} onChange={(e) => handleColorChange(team, e.target.value)} ref={colorRef}></input>
    </form>
  )
}

export function TeamScore({score, color}) {
  return (
    <h2 className="tScore" style={{color}}>{score}</h2>
  )
}

export function TeamScoringInputs({team, handleFormSubmit, color}) {
  const bonus0Ref = useRef(null);
  const bonus100Ref = useRef(null);
  const bonus200Ref = useRef(null);
  const redRef = useRef(null);
  const blackRef = useRef(null);
  const cardsRef = useRef(null);
  const negRef = useRef(null);

  const onSubmit = () => {
    const redCanastas = redRef.current.value;
    const blackCanastas = blackRef.current.value;
    const cards = cardsRef.current.value;
    const negative = negRef.current.value;
    const bonus = bonus0Ref.current.checked ? 0 : (bonus100Ref.current.checked ? 100 : 200);

    const teamResetID = "t" + team + "reset";
    handleFormSubmit(team, { bonus, redCanastas, blackCanastas, cards, negative });
    document.getElementById(teamResetID).click();
  };

  return (
    <form>
      <table>
        <tbody>
          <tr>
            <td><label className="tText" style={{color}}>Bonus</label></td>
            <td><label className="tText" style={{color}}>&emsp;0</label><input type ="radio" name="bonus" id="tBonus0" value="0" ref={bonus0Ref} defaultChecked></input>
            <label className="tText" style={{color}}>&emsp;100</label><input type ="radio" name="bonus" id="tBonus100" value="100" ref={bonus100Ref}></input>
            <label className="tText" style={{color}}>&emsp;200</label><input type ="radio" name="bonus" id="tBonus200" value="200" ref={bonus200Ref}></input></td>
          </tr>
          <tr>
            <td><label className="tText" style={{color}}>Number Of Red Canastas</label></td>
            <td><input type="number" id="tRed" className="textField" ref={redRef}></input></td>
          </tr>
          <tr>
            <td><label className="tText" style={{color}}>Number Of Black Canastas & Red 3s</label></td>
            <td><input type="number" id="tBlack" className="textField" ref={blackRef}></input></td>
          </tr>
          <tr>
            <td><label className="tText" style={{color}}>Card Values</label></td>
            <td><input type="number" id="tCards" className="textField" ref={cardsRef}></input></td>
          </tr>
          <tr>
            <td><label className="tText" style={{color}}>Negative (if needed)</label></td>
            <td><input type="number" id="tNegative" className="textField" ref={negRef}></input></td>
          </tr>
        </tbody>      
      </table>
			<br/>
			<div className="central">
				<input type="button" className="tInput" value="Done" onClick={onSubmit} id="tDone" style={{backgroundColor: color}}></input>
				<input type="reset" value="Clear" className="tInput" id={"t" + team + "reset"}  style={{backgroundColor: color}}></input>
			</div>
    </form>
  )
}

export function TeamNameAndScore({scores, colors, handleColorChange}) {

  return (
    <div className="container">
        <div className="mainQuadrants">
          <TeamName team={1} color={colors[1]} handleColorChange={handleColorChange}/>
          <TeamScore score={scores[1]} color={colors[1]}/>
        </div>
        <div className="mainQuadrants">
          <TeamName team={2} color={colors[2]} handleColorChange={handleColorChange}/>
          <TeamScore score={scores[2]} color={colors[2]}/>
        </div>
    </div>
  )
}

export function ScoringArea({handleFormSubmit, colors}) {
  return (
    <div className="container">
      <div className="mainQuadrants">
        <TeamScoringInputs team={1} handleFormSubmit={handleFormSubmit} color={colors[1]}/>
      </div>
      <div className="mainQuadrants">
        <TeamScoringInputs team={2} handleFormSubmit={handleFormSubmit} color={colors[2]}/>
      </div>
    </div>
  )
}


export function Teams() {
  const [scores, setScores] = useState({1: 0, 2: 0});
  const [colors, setColors] = useState({1: '#66F2B1', 2: '#66e0f2'})

  useEffect(() => {
    const savedScores = localStorage.getItem('teamScores');
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, []);

  useEffect(() => {
    if (scores[1] !== 0 || scores[2] !== 0) {
      localStorage.setItem('teamScores', JSON.stringify(scores));
    }
  }, [scores]);

  const resetScores = () => {
    setScores({1: 0, 2: 0});
    document.getElementById("t1reset").click();
    document.getElementById("t2reset").click();
    localStorage.removeItem('teamScores');
  }

  const handleColorChange = (team, color) => {
    setColors(prev => ({...prev, [team]: color}))
  }

  const handleFormSubmit = (team, values) => {
    var {bonus, redCanastas, blackCanastas, cards, negative} = values;

    //Set currentScore based on incoming value & bonus
    const prevScore = scores[team];

    //ensure valid integer values
    bonus=parseInt(bonus);
    redCanastas = (isNaN(parseInt(redCanastas))) ? 0 : parseInt(redCanastas);
    blackCanastas = (isNaN(parseInt(blackCanastas))) ? 0 : parseInt(blackCanastas);
    cards = (isNaN(parseInt(cards))) ? 0 : parseInt(cards);
    negative = (isNaN(parseInt(negative))) ? 0 : parseInt(negative);

    //Correct for possible errors in user input
    redCanastas = (redCanastas > 499) ? redCanastas / 500 : redCanastas;
    blackCanastas = (blackCanastas > 299) ? blackCanastas / 300 : blackCanastas;
    negative = (negative < 0) ? (-1*negative) : negative;
    if (redCanastas<0 || blackCanastas<0 || cards<0) {
      alert("Only the negative field may contain a negative number.");
      return;
    }

    //Calculation & updating
    const currentScore = prevScore + cards + (500*redCanastas) + (300*blackCanastas) - negative + bonus;
    setScores(prev => ({...prev, [team]: currentScore}));
  }

  return (
    <>
      <TeamNameAndScore scores={scores} colors={colors} handleColorChange={handleColorChange}/>
      <ScoringArea handleFormSubmit={handleFormSubmit} colors={colors}/>
      <div className="central">
			  <input type="button" className="nInput" value="Reset Scores" onClick={resetScores} id="resetAll"></input>
		  </div>
    </>
  )
}

export default function Homepage() {
  return (
    <div className="App">
      <GlobalHeader/>
      <Teams/>
      <GlobalFooter/>
    </div>
  );
}