class Player {
    constructor(x, y, w, h, c, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.c = c;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
    }
  
    drawRect() {
      canvasContext.fillStyle = this.c;
      canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }
  
    playerMove() {
      
      if(rightPressed && this.x + this.w < canvas.width) {
        this.x += this.xSpeed;
      }
      if(leftPressed && this.x > 0) {
        this.x -= this.xSpeed;
      }
    }
  
    startPos(){
        this.x = canvas.width / 2 - this.w / 2;
        this.y = canvas.height - this.h;
    }
  
  }
  