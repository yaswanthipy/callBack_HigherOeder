function processCategories(categories) {
  // Step 1: Use reduce to count occurrences
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Step 2 (Extra Challenge): Sort categories by count (descending)
  const sortedCategories = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])   // sort by count
    .map(item => item[0]);         // extract category names

  return {
    counts,
    sortedCategories
  };
}


const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];


console.log(processCategories(categories));
