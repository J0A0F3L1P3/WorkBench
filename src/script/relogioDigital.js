function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerHTML = now;
  }
  
  setInterval(updateClock, 1000);