import './App.css';
import { useState } from 'react';
import React from 'react';
import { percentages } from './utils/percentages';

function App() {
  const [maxPoints, setMaxPoints] = useState<string | number | readonly string[] | undefined>(24)
  const [currentPoints, setCurrentPoints] = useState<string | number | readonly string[] | undefined>(24)
  const getGrade = () => {
    let fraction =  Number(currentPoints)/ Number(maxPoints)
    if (fraction>=percentages.sieben) return 7
    if (fraction>=percentages.sechs) return 6
    if (fraction>=percentages.vier) return 4
    if (fraction>=percentages.fuenf) return 5
    if (fraction>=percentages.drei) return 3
    if (fraction>=percentages.zwei) return 2
    if (fraction>=percentages.eins) return 1
  }

  return (
    <div className="App">
      <h1>Notenrechner basierend auf IB Punkten</h1>
      <h3>Maximale Punkte:</h3>
      <input type='number' value={maxPoints} onChange={(e) => setMaxPoints(e.target.value)} />
      <h3>Geschaffte Punkte:</h3>
      <input type='number' value={currentPoints} onChange={(e) => setCurrentPoints(e.target.value)} />
      <h3>Note: {getGrade()}</h3>
    </div>
  );
}

export default App;
