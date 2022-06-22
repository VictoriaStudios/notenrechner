import './App.css';
import { useState } from 'react';
import React from 'react';
import { percentages, percentagesPeru, percentagesExam2, percentagesPeruExam2 } from './utils/percentages';
import Switch from './components/Switch';

function App() {
  const [maxPoints, setMaxPoints] = useState<string | number | readonly string[] | undefined>(24)
  const [currentPoints, setCurrentPoints] = useState<string | number | readonly string[] | undefined>(24)
  const [examType, setExamType] = useState<0 | 1>(0)
  const switchExamType = () => {
    if (examType === 0) {
      setExamType(1)
      return
    }
    if (examType === 1) {
      setExamType(0)
      return
    }
  }

  const getGrade = () => {
    let currentPercentages: any | undefined = undefined
    if (examType === 0) {
      currentPercentages = percentages
    }
    else if (examType === 1) {
      currentPercentages = percentagesExam2
    }

    let fraction = Number(currentPoints) / Number(maxPoints)
    if (fraction >= currentPercentages.sieben) return 7
    if (fraction >= currentPercentages.sechs) return 6
    if (fraction >= currentPercentages.fuenf) return 5
    if (fraction >= currentPercentages.vier) return 4
    if (fraction >= currentPercentages.drei) return 3
    if (fraction >= currentPercentages.zwei) return 2
    if (fraction >= currentPercentages.eins) return 1
  }

  const getGradePeru = () => {
    let currentPercentagesPeru: any | undefined = undefined
    if (examType === 0) {
      currentPercentagesPeru = percentagesPeru
    }
    else if (examType === 1) {
      currentPercentagesPeru = percentagesPeruExam2
    }

    let fraction = Number(currentPoints) / Number(maxPoints)
    if (fraction >= currentPercentagesPeru.zwanzig) return 20
    if (fraction >= currentPercentagesPeru.neunzehn) return 19
    if (fraction >= currentPercentagesPeru.achtzehn) return 18
    if (fraction >= currentPercentagesPeru.siebzehn) return 17
    if (fraction >= currentPercentagesPeru.sechszehn) return 16
    if (fraction >= currentPercentagesPeru.fuenfzehn) return 15
    if (fraction >= currentPercentagesPeru.vierzehn) return 14
    if (fraction >= currentPercentagesPeru.dreizehn) return 13
    if (fraction >= currentPercentagesPeru.zwoelf) return 12
    if (fraction >= currentPercentagesPeru.elf) return 11
    if (fraction >= currentPercentagesPeru.zehn) return 10
    if (fraction >= currentPercentagesPeru.neun) return 9
    if (fraction >= currentPercentagesPeru.acht) return 8
    if (fraction >= currentPercentagesPeru.sieben) return 7
    if (fraction >= currentPercentagesPeru.sechs) return 6
    if (fraction >= currentPercentagesPeru.fuenf) return 5
  }

  return (
    <div className={`App ${examType === 1 ? "Appalt" : undefined}`}>
      <Switch onClick={switchExamType} />
      <h1 className={examType === 1 ? "h1alt" : undefined}>Notenrechner basierend auf IB Punkten - Klausur {examType === 0 ? '1' : '2'}</h1>
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
