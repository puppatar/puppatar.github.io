console-console.log('xD');
let canvasWidth = 480;
let draw = SVG('drawing').size(canvasWidth,canvasWidth);
let rectWidth = 100;
let rect = draw.rect(100,100).fill('purple');
(100,100);
let rectdirection = 'right';
let x = 0;
let y= 0
document.getElementById('move-rectangle').onclick = function () {
    console.log('move-rectangle');
    if (x > canvasWidth - rectWidth){
        rectdirection = 'left';
    }

    if (rectdirection == 'right'){
        x = x + 20;
        y = y + 20;
        rect.move(x, y);
    }
    if (rectdirection == 'left'){
        x = x - 20;
        y = y - 20;
        rect.move(x, y);
    }
} 
       
    

    
