function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    document.querySelector('.clock').innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateClock, 1000);