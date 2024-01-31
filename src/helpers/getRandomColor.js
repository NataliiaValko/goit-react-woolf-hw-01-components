const getRandomColor = () => {
  const getRandomNumber = () => {
    return Math.round(Math.random() * 255);
  };

  const color = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
  if (color === 'rgb(255, 255, 255)') {
    getRandomColor();
  }

  return color;
};

export default getRandomColor;
