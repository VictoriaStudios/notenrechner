import './App.css';
import { useState } from 'react';
import React from 'react';
import { percentages, percentagesPeru, percentagesExam2, percentagesPeruExam2 } from './utils/percentages';
import Switch from './components/Switch';

function App() {
  const [maxPoints, setMaxPoints] = useState<string | number | readonly string[] | undefined>(24)
  const [currentPoints, setCurrentPoints] = useState<string | number | readonly string[] | undefined>(24)
  const [examType, setExamType] = useState<0 | 1>(0)
  const getGrade = () => {

    let fraction = Number(currentPoints) / Number(maxPoints)
    if (fraction >= percentages.sieben) return 7
    if (fraction >= percentages.sechs) return 6
    if (fraction >= percentages.fuenf) return 5
    if (fraction >= percentages.vier) return 4
    if (fraction >= percentages.drei) return 3
    if (fraction >= percentages.zwei) return 2
    if (fraction >= percentages.eins) return 1
  }

  const getGradePeru = () => {
    let fraction = Number(currentPoints) / Number(maxPoints)
    if (fraction >= percentagesPeru.zwanzig) return 20
    if (fraction >= percentagesPeru.neunzehn) return 19
    if (fraction >= percentagesPeru.achtzehn) return 18
    if (fraction >= percentagesPeru.siebzehn) return 17
    if (fraction >= percentagesPeru.sechszehn) return 16
    if (fraction >= percentagesPeru.fuenfzehn) return 15
    if (fraction >= percentagesPeru.vierzehn) return 14
    if (fraction >= percentagesPeru.dreizehn) return 13
    if (fraction >= percentagesPeru.zwoelf) return 12
    if (fraction >= percentagesPeru.elf) return 11
    if (fraction >= percentagesPeru.zehn) return 10
    if (fraction >= percentagesPeru.neun) return 9
    if (fraction >= percentagesPeru.acht) return 8
    if (fraction >= percentagesPeru.sieben) return 7
    if (fraction >= percentagesPeru.sechs) return 6
    if (fraction >= percentagesPeru.fuenf) return 5
  }

  return (
    <div className={`App ${examType === 1 ? "Appalt" : undefined}`}>
      <Switch/>
      <h1 className={examType === 1 ? "h1alt" : undefined}>Notenrechner basierend auf IB Punkten - Klausur 1</h1>
      <h3 className={examType === 1 ? "h3alt" : undefined}>Maximale Punkte:</h3>
      <input type='number' value={maxPoints} onChange={(e) => setMaxPoints(e.target.value)} />
      <h3 className={examType === 1 ? "h3alt" : undefined}>Geschaffte Punkte:</h3>
      <input type='number' value={currentPoints} onChange={(e) => setCurrentPoints(e.target.value)} />
      <div className="gradeContainer">
        <h3 className={`gradeDisplay ${examType === 1 ? "h3alt" : undefined}`}>Note Peru: {getGradePeru()}</h3>
        <h3 className={`gradeDisplay ${examType === 1 ? "h3alt" : undefined}`}>Note IB: {getGrade()}</h3>
      </div>
    </div>
  );
}

export default App;
