// main container jha parent .>>>>>>>>>.
const mainContainer = document.getElementById('main-container');


// <<<<<<<create section jha main container er section>>>>>>

const placeSection = document.createElement('section')

// add mainContainer

mainContainer.appendChild(placeSection);

// <<<<<<<<<<<<<<<create h1 in section >>>>>>>>
const h1 = document.createElement('h1');

h1.innerText = 'My second title section';
placeSection.appendChild(h1);

//  <<<<<<create ul in section>>>>>>>>>>>>>>>>>

const ul = document.createElement('ul');
placeSection.appendChild(ul);


// <<<<<<<<<<create li in ul >>>>>>>>>>>>>>>>>>>>>>>

const li1 = document.createElement('li');
li1.innerText='Apple';

ul.appendChild(li1)


// <<<<<<< second li2 in ul>>>>>>>>>>>>

const li2 = document.createElement('li')
li2.innerText = 'Banana';

ul.appendChild(li2);


