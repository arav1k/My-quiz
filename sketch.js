var quiz
var question

function draw()
{
  background('pink')
  quiz=new Quiz()
  quiz.start()
}

function setup()
{
  createCanvas(850,400)
}








//Create a ball variable and control the ball using your arrows keys. The velocity of the ball is given
//inside a seperate function that is functioned with arguements
//Arguements are the velocitys in x and y
/*var Ball


function draw()
{
  Ball=createSprite(200,40,20,20)
  //Create ifelseif 
  if(keyDown('UP_ARROW')){
     velocity(0,-2)
  }
  else if('DOWN_ARROW')
  {
    velocity(0,2)
  }

  else if('LEFT_ARROW')
  {
    velocity(-2,0)
  }

  else if('RIGHT_ARROW')
  {
    velocity(2,0)
  }

  
      

      


  
  
   
  

  

  drawSprites()
}



function velocity(x,y)
{
    Ball.x+=x
    Ball.y+=y

}

*/



