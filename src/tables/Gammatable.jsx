import React from 'react';

const Gammatable = ({ gammaLabels, gamma, statisticsGamma }) => {
  return (
    <div>
      <h3>Gamma Table</h3>
      <table className='statistics-table'>
        <thead>
          <tr>
            <th>Measure</th>
            {gammaLabels.map((alcoholClass) => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {gamma.map((measure) => (
            <React.Fragment key={measure}>
              <tr>
                <td>{measure} Mean</td>
                {gammaLabels.map((alcoholClass) => (
                  <td key={alcoholClass}>
                    {statisticsGamma[alcoholClass].mean.toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{measure} Median</td>
                {gammaLabels.map((alcoholClass) => (
                  <td key={alcoholClass}>
                    {statisticsGamma[alcoholClass].median.toFixed(2)}
                  </td>
                ))}
              </tr>
              <tr>
                <td>{measure} Mode</td>
                {gammaLabels.map((alcoholClass) => (
                  <td key={alcoholClass}>
                    {statisticsGamma[alcoholClass].mode.toFixed(2)}
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

export default Gammatable;
