function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  console.log('Before sleep');
  sleep(2000).then(() => {
    console.log('After sleep');
  });
    