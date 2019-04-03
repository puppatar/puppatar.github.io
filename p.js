const canvaswidth = 700;
const canvasheight = 500;
const blockwidth = 75;
const blockheight = 5;
let numrow = 10;
let blocknumb = 5;


let draw = SVG('block').size(canvaswidth, canvasheight)

const White = '#fff';
const Black = '#000';

for(let i = 0; i < numrow; i++){
    numrow = i + blockheight;

    for(let j = 0; j < numrow; j++){
        blocknumb = j + blockwidth;

        var rect = draw.rect(canvasheight,canvaswidth).fill('white')
        }
        
    }
