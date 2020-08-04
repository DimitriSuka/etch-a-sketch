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
const grid1 = document.querySelector('.grid-1');
const grid2 = document.querySelector('.grid-2');
const grid3 = document.querySelector('.grid-3');
const grid4 = document.querySelector('.grid-4');
const grid5 = document.querySelector('.grid-5');
const grid6 = document.querySelector('.grid-6');
const grid7 = document.querySelector('.grid-7');
const grid8 = document.querySelector('.grid-8');
const grid9 = document.querySelector('.grid-9');
const grid10 = document.querySelector('.grid-10');
const grid11 = document.querySelector('.grid-11');
const grid12 = document.querySelector('.grid-12');
const grid13 = document.querySelector('.grid-13');
const grid14 = document.querySelector('.grid-14');
const grid15 = document.querySelector('.grid-15');
const grid16 = document.querySelector('.grid-16');

grid1.addEventListener('mouseover', () => {
    grid1.style.cssText = "background-color: white";
});

grid2.addEventListener('mouseover', () => {
    grid2.style.cssText = "background-color: white";
});

grid3.addEventListener('mouseover', () => {
    grid3.style.cssText = "background-color: white";
});

grid4.addEventListener('mouseover', () => {
    grid4.style.cssText = "background-color: white";
});

grid5.addEventListener('mouseover', () => {
    grid5.style.cssText = "background-color: white";
});

grid6.addEventListener('mouseover', () => {
    grid6.style.cssText = "background-color: white";
});

grid7.addEventListener('mouseover', () => {
    grid7.style.cssText = "background-color: white";
});

grid8.addEventListener('mouseover', () => {
    grid8.style.cssText = "background-color: white";
});

grid9.addEventListener('mouseover', () => {
    grid9.style.cssText = "background-color: white";
});

grid10.addEventListener('mouseover', () => {
    grid10.style.cssText = "background-color: white";
});

grid11.addEventListener('mouseover', () => {
    grid11.style.cssText = "background-color: white";
});

grid12.addEventListener('mouseover', () => {
    grid12.style.cssText = "background-color: white";
});

grid13.addEventListener('mouseover', () => {
    grid13.style.cssText = "background-color: white";
});

grid14.addEventListener('mouseover', () => {
    grid14.style.cssText = "background-color: white";
});

grid15.addEventListener('mouseover', () => {
    grid15.style.cssText = "background-color: white";
});

grid16.addEventListener('mouseover', () => {
    grid16.style.cssText = "background-color: white";
});

