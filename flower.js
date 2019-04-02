
var draw = SVG('flowers').size(2000, 2000)






function petal2(x,y){
     petal = draw.circle(100,80 ).fill('yellow').move(x,y);

}

function flower(x,y){ 
    var petal = draw.circle(100,80 ).fill('yellow').move(x - 50,y -  -40);
    var petal = draw.circle(100,80 ).fill('yellow').move(x - 60,y -  20);
    var petal = draw.circle(100,80 ).fill('yellow').move(x - 10,y -  50);
    var petal = draw.circle(100,80 ).fill('yellow').move(x - -60,y -  35);
    var petal = draw.circle(100,80 ).fill('yellow').move(x - -90,y -  -30);
    var petal = draw.circle(100,80 ).fill('yellow').move(x - -80,y -  -60);
    var circle = draw.circle(150, 100).fill('green').move(x, y) 
    var rect = draw.rect(100, 100).size(10,70).fill('green').move(x - -70, y - -150)
}

flower(500, 200)
flower(400, 400)
flower(300, 600)
flower(200, 800)
flower(100, 1000)

var bee = draw.circle(50,50).fill('yellow').move(10,50)
    draw.circle(40,40).move(40,50).fill('yellow')
    draw.circle(5,5).fill('black').move(60,60)
    
var stripes = draw.rect(5,45).fill('black').move(20, 50)
              draw.rect(5,45).fill('black').move(40, 50)

var wing = draw.ellipse(10,40).fill('gray').move(27,30)
    










