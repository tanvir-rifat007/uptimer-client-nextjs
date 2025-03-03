const wait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, 1000);
  });
};

export default wait;
