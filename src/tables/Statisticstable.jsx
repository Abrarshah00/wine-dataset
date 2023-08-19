import React from 'react';

const Statisticstable = ({ classLabels, statistics, measures }) => {
  return (
    <div>
      <h3>Statistics Table</h3>
      <table className='statistics-table'>
        <thead>
          <tr>
            <th>Measure</th>
            {classLabels.map((alcoholClass) => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {measures.map((measure) => (
            <React.Fragment key={measure}>
              <tr>
                <td>{measure} Mean</td>
                {classLabels.map((alcoholClass) => (
                  <td key={alcoholClass}>
                    {statistics[alcoholClass].mean.toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{measure} Median</td>
                {classLabels.map((alcoholClass) => (
                  <td key={alcoholClass}>
                    {statistics[alcoholClass].median.toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{measure} Mode</td>
                {classLabels.map((alcoholClass) => (
                  <td key={alcoholClass}>
                    {statistics[alcoholClass].mode.toFixed(2)}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statisticstable;
