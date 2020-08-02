// catching main container
const container = document.querySelector('#container');


// creating row for "grid-top"
const gridTop1 = document.createElement('div');
gridTop1.classList.add('grid-1');
gridTop1.classList.add('top');
const gridTop2 = document.createElement('div');
gridTop2.classList.add('grid-2');
gridTop2.classList.add('top');
const gridTop3 = document.createElement('div');
gridTop3.classList.add('grid-3');
gridTop3.classList.add('top');
const gridTop4 = document.createElement('div');
gridTop4.classList.add('grid-4');
gridTop4.classList.add('top');

const gridMid1 = document.createElement('div');
gridMid1.classList.add('grid-5');
gridMid1.classList.add('upper-mid');
const gridMid2 = document.createElement('div');
gridMid2.classList.add('grid-6');
gridMid2.classList.add('upper-mid');
const gridMid3 = document.createElement('div');
gridMid3.classList.add('grid-7');
gridMid3.classList.add('upper-mid');
const gridMid4 = document.createElement('div');
gridMid4.classList.add('grid-8');
gridMid4.classList.add('upper-mid');

const gridMid5 = document.createElement('div');
gridMid5.classList.add('grid-9');
gridMid5.classList.add('lower-mid');
const gridMid6 = document.createElement('div');
gridMid6.classList.add('grid-10');
gridMid6.classList.add('lower-mid');
const gridMid7 = document.createElement('div');
gridMid7.classList.add('grid-11');
gridMid7.classList.add('lower-mid');
const gridMid8 = document.createElement('div');
gridMid8.classList.add('grid-12');
gridMid8.classList.add('lower-mid');

const gridBottom1 = document.createElement('div');
gridBottom1.classList.add('grid-13');
gridBottom1.classList.add('bottom');
const gridBottom2 = document.createElement('div');
gridBottom2.classList.add('grid-14');
gridBottom2.classList.add('bottom');
const gridBottom3 = document.createElement('div');
gridBottom3.classList.add('grid-15');
gridBottom3.classList.add('bottom');
const gridBottom4 = document.createElement('div');
gridBottom4.classList.add('grid-16');
gridBottom4.classList.add('bottom');

// appending all sections to 16 / 16 grid
container.appendChild(gridTop1);
container.appendChild(gridTop2);
container.appendChild(gridTop3);
container.appendChild(gridTop4);
container.appendChild(gridMid1);
container.appendChild(gridMid2);
container.appendChild(gridMid3);
container.appendChild(gridMid4);
container.appendChild(gridMid5);
container.appendChild(gridMid6);
container.appendChild(gridMid7);
container.appendChild(gridMid8);
container.appendChild(gridBottom1);
container.appendChild(gridBottom2);
container.appendChild(gridBottom3);
container.appendChild(gridBottom4);

// creating pen effect now