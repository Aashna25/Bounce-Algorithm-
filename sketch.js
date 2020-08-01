var m_r,f_r

function setup() {
  createCanvas(800,400);
  f_r=createSprite(200, 300, 40, 40);
  m_r=createSprite(200,200,40,40)
  f_r.shapeColor="blue"
  m_r.shapeColor="blue"
  m_r.debug=true
  f_r.debug=true
  m_r.velocityY=+5
  f_r.velocityY=-5
}

function draw() {
  background(255,255,255); 
  
  if
  ((m_r.y-f_r.y<m_r.width/2+f_r.width/2)
  &&(f_r.y-m_r.y<f_r.width/2+m_r.width/2)) 
  {
    m_r.velocityY=m_r.velocityY*(-1)
    f_r.velocityY=f_r.velocityY*(-1)
  }
  if((m_r.x-f_r.x<m_r.width/2+f_r.width/2)
  &&(f_r.x-m_r.x<f_r.width/2+m_r.width/2))

  {
    m_r.velocityX=m_r.velocityX*(-1)
    f_r.velocityX=f_r.velocityX*(-1)
  }
  
  drawSprites();
}