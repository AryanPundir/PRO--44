var box1  , box2 , box3 ,box4






function setup() {
  createCanvas(800,400);
 var box1 =  createSprite(365, 150, 328, 10);
 box1.shapeColor = "red"
 var box2 =  createSprite(365, 250, 328, 10);
 box2.shapeColor = "BLUE"
 var box3 =  createSprite(200, 200, 10, 110);
 box3.shapeColor = rgb(0,255,0)
 var box4 =  createSprite(525, 200, 10, 110);
 box4.shapeColor = rgb(0,255,0)


}

function draw() {
  background("black"); 
  var hr = hour();
var mn = minute();
var sc = second();


textSize(75)
fill(rgb(247,236,27))
 text(hr+":",220,225)

 textSize(75)
fill(rgb(27,247,181))
 text(mn+":",325,225)

 textSize(75)
fill(rgb(247,27,210))
 text(sc,435,225)

 textSize(70)
 fill(rgb(235,135,115))
 text("DIGITAL CLOCK",125,100)


  drawSprites();
}