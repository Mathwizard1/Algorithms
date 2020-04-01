function bounceOff(x,y){
    if (x.x - y.x < y.width/2 + x.width/2
      && y.x - x.x < y.width/2 + x.width/2) {
    x.velocityX = x.velocityX * (-1);
    y.velocityX = y.velocityX * (-1);
  }
  if (x.y - y.y < y.height/2 + x.height/2
    && y.y - x.y < y.height/2 + x.height/2){
    x.velocityY = x.velocityY * (-1);
    y.velocityY = y.velocityY * (-1);
  }
  }

function isTouching(x,y){
  if(x.x-y.x<(y.width+x.width)/2
  && y.x-x.x<(y.width+x.width)/2
  && x.y-y.y<(y.height+x.height)/2
  && y.y-x.y<(y.height+x.height)/2){
    return true;
  }else{return false;}
}