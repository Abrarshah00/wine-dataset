// Utility function to calculate the mean
function calculateMean(data) {
  console.log('data', data);
  if (data.length === 0) {
    return null; // Return null for an empty dataset
  }
  const numericData = data.map((entry) => parseFloat(entry));

  const total = numericData.reduce((sum, entry) => sum + entry, 0);
  return total / data.length;
}

// Utility function to calculate the median
function calculateMedian(data) {
  const numericData = data.map((entry) => parseFloat(entry));
  const sortedData = numericData.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
  } else {
    return sortedData[middleIndex];
  }
}

// Utility function to calculate the mode
function calculateMode(data) {
  const frequencyMap = {};
  data.forEach((entry) => {
    frequencyMap[entry] = (frequencyMap[entry] || 0) + 1;
  });

  let mode = null;
  let maxFrequency = 0;

  for (const entry in frequencyMap) {
    if (frequencyMap[entry] > maxFrequency) {
      mode = entry;
      maxFrequency = frequencyMap[entry];
    }
  }

  return parseFloat(mode);
}

// Utility function to calculate class-wise statistics
function calculateClassWiseStatistics(dataset) {
  const classStatistics = {};

  dataset.forEach((entry) => {
    const alcoholClass = entry['Alcohol'];
    const flavanoidsValue = entry['Flavanoids'];

    if (!classStatistics[alcoholClass]) {
      classStatistics[alcoholClass] = [];
    }

    classStatistics[alcoholClass].push(flavanoidsValue);
  });

  const result = {};
  for (const alcoholClass in classStatistics) {
    const flavanoidsData = classStatistics[alcoholClass];
    result[alcoholClass] = {
      mean: calculateMean(flavanoidsData),
      median: calculateMedian(flavanoidsData),
      mode: calculateMode(flavanoidsData),
    };
  }

  return result;
}

export { calculateClassWiseStatistics };
