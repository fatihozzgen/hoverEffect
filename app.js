const container = document.querySelector('.container');
const color = [
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
    "#FF0000",
    "#0AEFFF",
    "#DEFF0A",
];

createBox(255);


function createBox(count) {
    for (let i=0; i < count; i++) {
        let boxE1 =document.createElement('div');
        boxE1.classList.add('box');
        container.appendChild(boxE1);
    }
}


const boxes = document.querySelectorAll('.box');


boxes.forEach((box) => {
    box.addEventListener('mouseover', function () {
        let randomId = Math.floor(Math.random() * color.length);
        
        box.style.backgroundColor =`${color[randomId]}`;
    });

    box.addEventListener('mouseout', function () {
        setTimeout(function() {
            box.style.backgroundColor = '#444';
        }, 2000);
    });
});