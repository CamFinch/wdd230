const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getPhrophetData(){
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);



}

const displayProphets = (prophets) => {
    prophets.forEach(function(prophet) {
        let card = document.createElement('section');
        let fullName = document.createElement('__');
        let portrait = document.createElement('img');

        fullName.textContent = '${prophet _______} _________';

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'Portraut of ${prophet _______} _________');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '350');
        portrait.setAttribute('height', '450');

        card.appendChild(_______);
        cards.appendChild(portrait);

        cards.appendChild(card);
    });
  }

getPhrophetData();
displayProphets();