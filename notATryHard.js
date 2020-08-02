// catching main container
const container = document.querySelector('#container');


// creating 4 main sections for 16 / 16 
const gridTop = document.createElement('div');
gridTop.classList.add('grid-top');

const gridUpperMid = document.createElement('div');
gridUpperMid.classList.add('grid-upper-mid');

const gridLowerMid = document.createElement('div');
gridLowerMid.classList.add('gird-lower-mid');

const gridBottom = document.createElement('div');
gridBottom.classList.add('grid-bottom');


// creating row for "grid-top"
const gridTop1 = document.createElement('div');
gridTop1.classList.add('grid-top-1');
const gridTop2 = document.createElement('div');
gridTop2.classList.add('grid-top-2');
const gridTop3 = document.createElement('div');
gridTop3.classList.add('grid-top-3');
const gridTop4 = document.createElement('div');
gridTop4.classList.add('grid-top-4');

// creating row for "grid-upper-mid"
const gridUpperMid1 = document.createElement('div');
gridUpperMid1.classList.add('grid-upper-mid-1');
const gridUpperMid2 = document.createElement('div');
gridUpperMid2.classList.add('grid-upper-mid-2');
const gridUpperMid3 = document.createElement('div');
gridUpperMid3.classList.add('grid-upper-mid-3');
const gridUpperMid4 = document.createElement('div');
gridUpperMid4.classList.add('grid-upper-mid-4');

// creating row for "grid-lower-mid"
const gridLowerMid1 = document.createElement('div');
gridLowerMid1.classList.add('gird-lower-mid-1');
const gridLowerMid2 = document.createElement('div');
gridLowerMid2.classList.add('gird-lower-mid-2');
const gridLowerMid3 = document.createElement('div');
gridLowerMid3.classList.add('gird-lower-mid-3');
const gridLowerMid4 = document.createElement('div');
gridLowerMid4.classList.add('gird-lower-mid-4');

// creating row for "grid-bottom"
const gridBottom1 = document.createElement('div');
gridBottom1.classList.add('grid-bottom-1');
const gridBottom2 = document.createElement('div');
gridBottom2.classList.add('grid-bottom-2');
const gridBottom3 = document.createElement('div');
gridBottom3.classList.add('grid-bottom-3');
const gridBottom4 = document.createElement('div');
gridBottom4.classList.add('grid-bottom-4');

// adding all rows to top, mid and bottom
gridTop.appendChild(gridTop1);
gridTop.appendChild(gridTop2);
gridTop.appendChild(gridTop3);
gridTop.appendChild(gridTop4);

gridUpperMid.appendChild(gridUpperMid1);
gridUpperMid.appendChild(gridUpperMid2);
gridUpperMid.appendChild(gridUpperMid3);
gridUpperMid.appendChild(gridUpperMid4);

gridLowerMid.appendChild(gridLowerMid1);
gridLowerMid.appendChild(gridLowerMid2);
gridLowerMid.appendChild(gridLowerMid3);
gridLowerMid.appendChild(gridLowerMid4);

gridBottom.appendChild(gridBottom1);
gridBottom.appendChild(gridBottom2);
gridBottom.appendChild(gridBottom3);
gridBottom.appendChild(gridBottom4);

// appending main 4 sections to 16 / 16 grid
container.appendChild(gridTop);
container.appendChild(gridUpperMid);
container.appendChild(gridLowerMid);
container.appendChild(gridBottom);