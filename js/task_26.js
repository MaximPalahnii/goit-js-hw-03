// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const {today:{low:todayLow, high:todayHigh},
         tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;

  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
