function getweather() {
  const cityNameRef = document.querySelector("#cityName");
  const cityNameValue = cityNameRef.value;
  const weatherPromise = fetch(
    `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityNameValue}`,
  );
  weatherPromise
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const divRef = document.querySelector("#weather");
      divRef.innerHTML = `
        <div>
          <h1>Temperature:${data.current.temp_c}</h1>
          <h2>Feels Like:${data.current.feelslike_c}</h2>
          <h3>wind speed:${data.current.wind_kph}</h3>
        </div>`;
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
