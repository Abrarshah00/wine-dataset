import React, { useEffect, useState } from 'react';
import './App.css';
import wineDataset from './Wine-Data.json';
import { calculateClassWiseStatistics } from './utils/meanCalc';
import Statisticstable from './tables/Statisticstable';
import Gammatable from './tables/Gammatable';

function App() {
  const [statistics, setStatistics] = useState([]);
  const [statisticsGamma, setStatisticsGamma] = useState([]);
  const classLabels = Object.keys(statistics);
  const gammaLabels = Object.keys(statisticsGamma);
  const measures = ['Flavanoids'];
  const gamma = ['Gamma'];

  useEffect(() => {
    const result = calculateClassWiseStatistics(wineDataset);
    setStatistics(result);
    const gammaStatistics = calculateClassWiseStatistics(wineDataset);
    setStatisticsGamma(gammaStatistics);
  }, []);
  return (
    <div className='App'>
      <Statisticstable
        measures={measures}
        statistics={statistics}
        classLabels={classLabels}
      />
      <Gammatable
        gammaLabels={gammaLabels}
        gamma={gamma}
        statisticsGamma={statisticsGamma}
      />
    </div>
  );
}

export default App;

