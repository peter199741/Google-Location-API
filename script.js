var x = document.getElementById("map") 
document.getElementById('reset').disabled = true;
function getLocation() {
    document.getElementById('reset').disabled = false;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition , error);
      document.querySelector('button').disabled = true;
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    const lat = position.coords.latitude;
    const long= position.coords.longitude;
    const url = `https://maps.google.com/maps?q=${lat},${long}&output=embed`
    document.querySelector('iframe').setAttribute('src' , url);
    document.querySelector('iframe').style.display = 'block';
    localStorage.setItem('lat' , lat)
    localStorage.setItem('long' , long)
  }

  function error() {
    alert('We could not get your current location.')
  }
  

  function reset() {
    document.getElementById('reset').disabled = true;
    localStorage.removeItem('long');
    localStorage.removeItem('lat');
    document.querySelector('button').disabled = false;
    document.querySelector('iframe').style.display = 'none'
  }