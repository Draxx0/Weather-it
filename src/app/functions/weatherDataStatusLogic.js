const airQualityLogic = (co) => {
  if (co <= 200) {
    return "Bonne";
  } else if (co >= 201 && co <= 250) {
    return "Moyenne";
  } else return "Mauvaise";
};

const humidityLogic = (humidity) => {
  if (humidity <= 30) {
    return "Basse";
  } else if (humidity >= 31 && humidity <= 60) {
    return "Moyenne";
  } else return "Haute";
};

const pressureLogic = (pressure) => {
  if (pressure <= 1000) {
    return "Basse";
  } else if (pressure >= 1001 && pressure <= 1100) {
    return "Moyenne";
  } else return "Haute";
};

const weatherDataStatusLogic = {
  airQualityLogic,
  humidityLogic,
  pressureLogic,
};

export default weatherDataStatusLogic;
