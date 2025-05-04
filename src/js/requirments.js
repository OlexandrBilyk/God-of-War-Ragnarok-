const switcherSystem = document.querySelector('.Requirments__switcher--system');
const switcherSystemCircle = document.querySelector(
  '.Requirments__switcher-circle--system'
);

const minimum = {
  CPU: 'Intel i5-2500k or AMD Ryzen 3 1200',
  RAM: '8 GB',
  OS: 'Windows 10 64-bit',
  VIDEOCARD: 'NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)',
  'PIXEL SHADER': 5.1,
  'VERTEX SHADER': 5.1,
  'FREE DISC SPACE': '70 GB',
  'DEDICATED VIDEO RAM': '4 GB',
};
const recommended = {
  CPU: 'Intel i5-2500k or AMD Ryzen 5 1200',
  RAM: '8 GB',
  OS: 'Windows 11 64-bit',
  VIDEOCARD: 'NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)',
  'PIXEL SHADER': 5.1,
  'VERTEX SHADER': 5.1,
  'FREE DISC SPACE': '70 GB',
  'DEDICATED VIDEO RAM': '6 GB',
};

const standarded = {
  Platform: 'PS4',
  Premiere: '20.4.2018',
  Publisher: 'Sony Interactive Entertainment Europe',
  Species: 'Action, Adventure',
  Voice: 'English',
  'Display languages': 'English',
};

const limited = {
  Platform: 'PS4, PS5',
  Premiere: '20.4.2018',
  Publisher: 'Sony Interactive Entertainment Europe',
  Species: 'Action, Adventure',
  Voice: 'English, Polish, Russian',
  'Display languages': 'English, Dutch, Polish, Russian, Turkish',
};

const systemList = document.querySelector('.Requirments-list--system');
const psList = document.querySelector('.Requirments-list--ps');

const toggleRequirments = function (obj, list) {
  const buyButton = list.querySelector('.Requirments-list__btn');

  list.innerHTML = '';

  const entries = Object.entries(obj)
    .map(
      ([key, value]) =>
        `<p class="Requirments-list__text"><span class="Requirments-list__span">${key}</span> : ${value}</p>`
    )
    .join('');

  const html = `
    <li class="Requirments-list__item">
      ${entries}
    </li>
  `;

  list.insertAdjacentHTML('afterbegin', html);
  list.appendChild(buyButton);
};

switcherSystem.addEventListener('click', () => {
  switcherSystemCircle.classList.toggle('pressed');
  switcherSystem.classList.toggle('recommended');
  switcherSystem.previousElementSibling.classList.toggle('minimum');

  const isRecommended = switcherSystem.classList.contains('recommended');
  const systemObj = isRecommended ? recommended : minimum;
  toggleRequirments(systemObj, systemList);
});

toggleRequirments(minimum, systemList);

const switcherPs = document.querySelector('.Requirments__switcher--ps');
const switcherPsCircle = document.querySelector(
  '.Requirments__switcher-circle--ps'
);

switcherPs.addEventListener('click', () => {
  switcherPsCircle.classList.toggle('pressedPs');
  switcherPs.classList.toggle('limited');
  switcherPs.previousElementSibling.classList.toggle('standarted');

  const isLimited = switcherPs.classList.contains('limited');
  const systemObj = isLimited ? limited : standarded;
  toggleRequirments(systemObj, psList);
});

toggleRequirments(standarded, psList);
