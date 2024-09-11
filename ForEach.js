const map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
  ]);
  
  map.forEach((value, key) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });
  