// CITYSCAPE ASGN START CODE
"use strict";

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Draw Right Window
for (let i = 0; i < 5; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(175 + i * 25, 125, 10, 475);
}

// Draw Top Left Window
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 6; j++) {
        ctx.fillStyle = "white";
        ctx.fillRect(50 + i * 20, 200 + j * 25, 10, 10);
    }
}

// Draw Bottom Left Window
for (let i = 0; i < 6; i++) {
    ctx.fillStyle = 'white';
    ctx.fillRect(25, 375 + i * 40, 100, 20);
}