
var draw = SVG('flowers').size(500, 500)



var rect = draw.rect(100, 100).size(10,70).fill('green').move(115, 250)

var petal;
petal2(130, 150);
petal2(120,100);
petal2(65, 70);
petal2(30,120);
petal2(20,160);
// make more petals

function petal2(x,y){
     petal = draw.circle(100,80 ).fill('yellow').move(x,y);

}

function flower(x,y){
    var circle = draw.circle(150, 100).fill('green').move(x, y)  
    var petal = draw.circle(100,80 ).fill('yellow').move(x - 20,y -  20);

}

flower(300, 300)
flower(200, 200)








