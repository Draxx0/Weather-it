const getDynamicWeatherIcon = (weather) => {
  switch (weather) {
    case 1000:
      return process.env.PUBLIC_URL + "/icons/sun-cloud.png";
    case 1003:
      return process.env.PUBLIC_URL + "/icons/sun-cloud.png";
    case 1006:
      return process.env.PUBLIC_URL + "/icons/cloud.png";
    case 1030:
      return process.env.PUBLIC_URL + "/icons/sun-cloud-2.png";
    case 1009:
      return process.env.PUBLIC_URL + "/icons/cloud.png";
    case 1171:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1168:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1153:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1150:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1063:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1066:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1069:
      return process.env.PUBLIC_URL + "/icons/cloud.png";
    case 1072:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1087:
      return process.env.PUBLIC_URL + "/icons/Thunder.png";
    case 1114:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1117:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1135:
      return process.env.PUBLIC_URL + "/icons/cloud.png";
    case 1147:
      return process.env.PUBLIC_URL + "/icons/cloud.png";
    case 1180:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1183:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1186:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1189:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1192:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1195:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1198:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1201:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1204:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1207:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1210:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1213:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1216:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1219:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1222:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1225:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1237:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1240:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1243:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1246:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1249:
      return process.env.PUBLIC_URL + "/icons/rain.png";
    case 1252:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1255:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1258:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1261:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1264:
      return process.env.PUBLIC_URL + "/icons/snow-cloud.png";
    case 1273:
      return process.env.PUBLIC_URL + "/icons/Thunder.png";
    case 1276:
      return process.env.PUBLIC_URL + "/icons/Thunder.png";
    case 1279:
      return process.env.PUBLIC_URL + "/icons/Thunder.png";
    case 1282:
      return process.env.PUBLIC_URL + "/icons/Thunder.png";
    default:
      return process.env.PUBLIC_URL + "/icons/sun-cloud.png";
  }
};

export default getDynamicWeatherIcon;
