const daysEl = document.getElementById('timeDays');
const hoursEl = document.getElementById('timeHours');
const minutesEl = document.getElementById('timeMinuts');

const TWO_WEEKS_IN_MS = 14 * 24 * 60 * 60 * 1000;

let endDate = localStorage.getItem('releaseEndDate');

if (!endDate) {
  const now = new Date();
  const futureDate = new Date(now.getTime() + TWO_WEEKS_IN_MS);
  endDate = futureDate.toISOString();
  localStorage.setItem('releaseEndDate', endDate);
}

endDate = new Date(endDate);

const interval = setInterval(() => {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    clearInterval(interval);
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minutesEl.textContent = '0';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
}, 1000);
