const request = new XMLHttpRequest();

const requestLoad = () => {
  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    setData(response);
  }
};
request.addEventListener('load', requestLoad);
request.open('GET', 'https://neto-api.herokuapp.com/weather', true);
request.send();
